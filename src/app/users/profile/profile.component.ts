import { Component, OnInit, Input, Injectable, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Markdownoptions } from 'src/app/models/markdownoptions';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User';
import { ActivatedRoute } from '@angular/router';
import { TagService } from 'src/app/services/tags.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Tag } from 'src/app/models/Tag';
import { SelfTagsComponent } from 'src/app/experts/self-tags/self-tags.component';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [SelfTagsComponent]
})
export class ProfileComponent implements OnInit {

  @Input('user')
  user: User;
  temp: number;

  @Input('accId')
  accId: number;

  @Output()
  tagsUpdated: EventEmitter<boolean> = new EventEmitter();

  selectedFile: File;
  inEditMode: boolean;
  editModeText: string;
  profileForm: FormGroup;
  defaultPic: string;
  inInterestMode: boolean;
  interestModeText: string;
  tags: Tag[];
  isChecked = false;
  expertId = this.authService.account.id;
  expertSkills: string[] = [];
  currentExpert: any;
  closeResult: string;
  pictureToBeDisplayed : string;


  constructor(
    private authService: AuthService, 
    private fb: FormBuilder, 
    private userService: UserService,
    private route: ActivatedRoute, 
    private tagService: TagService, 
    private snackBar: MatSnackBar, 
    private modalService: NgbModal,
    ) { 
    this.inEditMode = false;
    this.editModeText = "Personalize";
    this.defaultPic = "../../assets/images/defaultProfilePic.png";
    this.inInterestMode = true;
    this.interestModeText = "Interest";
  }

  ngOnInit() {   
    this.userService.getUserById(this.authService.account.id).subscribe((data)=>{
      this.user = data;
      console.log(this.user);

      this.profileForm = this.fb.group({
        username: [''],
        email: [''],
        bio: [''],
      });
  
      if (!this.user.profilePic) {
        this.pictureToBeDisplayed = this.defaultPic;
      }else{
        this.pictureToBeDisplayed = "https://ask-an-expert.s3.amazonaws.com/" + this.user.profilePic;
      }
      this.getTags();
    });
  }

  getTags(){
    this.tagService.getTags().subscribe(tags => {
      this.tagService.getExpertTags(this.expertId).subscribe(expert => {
        this.tags = tags;
        this.currentExpert = expert;
        this.checkExpertTags();
      },
        error => {
          // still populate tags even if getting the expert tags fails
          this.tags = tags;
          console.error(error);
        });
    });
  }

  updateProfile() {
    if (this.profileForm.dirty) {
      if (this.profileForm.value['username']) {
        this.user.username = this.profileForm.value['username'];
      }

      if (this.profileForm.value['email']) {
        this.user.email = this.profileForm.value['email'];
      }

      if (this.profileForm.value['bio']) {
        this.user.bio = this.profileForm.value['bio'];
      }

      this.userService.updateUser(this.user,this.user.id).subscribe(resp => {
        this.tagsUpdated.emit(true);
        this.ngOnInit();
      });
    }
  }

  onFileChange(event) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    if(this.selectedFile){
      const uploadData = new FormData();
      uploadData.append('myImage', this.selectedFile, this.selectedFile.name)

      this.userService.updateProfilePic(uploadData,this.user.id).subscribe((data) => {
        this.user.profilePic = data['key'];
        this.pictureToBeDisplayed = `https://ask-an-expert.s3.amazonaws.com/${data['key']}`;
      });
    }
  }

  editMode() {
    this.profileForm.reset();
    this.inEditMode = !this.inEditMode;
    this.editModeText = (this.inEditMode) ? "Normal View" : "Personalize";
  }

  isAssociate() : boolean {
    return !this.user.expert;
  }

  isExpert() : boolean {
    return this.user.expert;
  }

  viewerSameAsLoggedInUser() : boolean {
    return this.accId == this.user.id;
  }

  addInterest() {
    this.inInterestMode = true;
  }

  toggle($event, id) {
    if ($event.checked === true) {
      this.expertSkills.push(id);
    } else {
      // delete the value and close the empty array slot
      this.expertSkills.splice(this.expertSkills.indexOf(id), 1);
    }
  }

  onSubmit() {
    this.tagService
      .saveExpertTags(
        this.expertSkills.map<Tag>(t => {
          return { name: t, id: 0 };
        }),
        this.authService.account.id,
      )
      .subscribe(resp => {
        //updates chip tags and checked tags in model
        this.tagsUpdated.emit(true);
        this.getTags();
        this.snackBar.open(`Tags Updated`, `OK`, { duration: 2000 });
      },err=>{
        this.snackBar.open('Failed to update skills', `OK`, { duration: 2000 })
      });
  }

  checkExpertTags() {
    for (const t of this.tags) {
      this.currentExpert.expertTags.forEach(element => {
        if (element.name === t.name) {
          this.toggle({ checked: true }, t.name);
          t.checked = true;
        } else {
          return false;
        }
      })
    }
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  addNewTag() {
    this.tagService.getTags().subscribe((tagsUpdate) => { this.tags.push(tagsUpdate[tagsUpdate.length - 1]); });
  }

}
