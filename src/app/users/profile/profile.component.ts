import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Markdownoptions } from 'src/app/models/markdownoptions';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  options: Markdownoptions = new Markdownoptions();

  @Input('user')
  user: User;
  temp: number;

  @Input('accId')
  accId: number;

  selectedFile: File = null;
  inEditMode: boolean;
  editModeText: string;
  profileForm: FormGroup;
  defaultPic: string;


  constructor(private authService: AuthService, private fb: FormBuilder, private userService: UserService,
    private route: ActivatedRoute) { 
    this.options.hideIcons = ['FullScreen'];
    this.options.showPreviewPanel = false;
    this.inEditMode = false;
    this.editModeText = "Personalize";
    this.defaultPic = "../../assets/images/defaultProfilePic.png";
  }

  ngOnInit() {
    this.profileForm = this.fb.group({
      username: [''],
      email: [''],
      bio: [''],
    });

    if (this.user.profilePic === "") {
      this.user.profilePic = this.defaultPic;
    }
  }

  updateProfile() {
    if (this.profileForm.dirty) {
      if (this.profileForm.value['username'] !== null) {
        this.user.username = this.profileForm.value['username'];
      }

      if (this.profileForm.value['email'] !== null) {
        this.user.email = this.profileForm.value['email'];
      }

      if (this.profileForm.value['bio'] !== null) {
        this.user.bio = this.profileForm.value['bio'];
      }
      this.userService.updateUser(this.user,this.user.id);
      this.profileForm.reset();
    }

    if (this.selectedFile !== null) {
      this.onUpload();
    }
  }

  onFileChange(event) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    const uploadData = new FormData();
    uploadData.append('image', this.selectedFile, this.selectedFile.name)

    this.userService.updateProfilePic(uploadData,this.user.id).subscribe(imageLink => {
      this.user.profilePic = imageLink;
    });
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

}
