import { Component, OnInit, Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Markdownoptions } from 'src/app/models/markdownoptions';
import { Tag } from '../../models/Tag';
import { TagService } from 'src/app/services/tags.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private authService: AuthService, private tagService: TagService, private snackBar: MatSnackBar, private modalService: NgbModal) {
    this.options.hideIcons = ['FullScreen'];
    this.options.showPreviewPanel = false;
    this.inEditMode = false;
    this.editModeText = "Personalize";
    this.inInterestMode = true;
    this.interestModeText = "Interest";
  }

  options: Markdownoptions = new Markdownoptions();
  user = this.authService.user;
  isAssociate = (): boolean => false;
  selectedFile: File;
  inEditMode: boolean;
  editModeText: string;
  inInterestMode: boolean;
  interestModeText: string;

  tags: Tag[];
  isChecked = false;
  expertId = this.authService.account.id;
  expertSkills: string[] = [];
  currentExpert: any;
  closeResult: string;

  ngOnInit() {
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

  onFileChange(event) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    const uploadData = new FormData();
    uploadData.append('myImage', this.selectedFile, this.selectedFile.name)

    this.authService.userProfilePic(uploadData);
  }

  editMode() {
    this.inEditMode = !this.inEditMode;
    this.editModeText = (this.inEditMode) ? "Normal View" : "Personalize";
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
      .subscribe();
    this.snackBar.open(`Tags Updated`, `OK`, { duration: 2000 });
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
}
