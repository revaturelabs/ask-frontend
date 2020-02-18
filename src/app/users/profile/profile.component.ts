import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Markdownoptions } from 'src/app/models/markdownoptions';
import { Tag } from '../../models/Tag';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private authService: AuthService, private fb: FormBuilder, private userService: UserService) {
    this.options.hideIcons = ['FullScreen'];
    this.options.showPreviewPanel = false;
    this.inEditMode = false;
    this.editModeText = "Personalize";
    this.defaultPic = "../../assets/images/defaultProfilePic.png";
  }

  options: Markdownoptions = new Markdownoptions();
  isAssociate = (): boolean => false;
  selectedFile: File = null;
  inEditMode: boolean;
  editModeText: string;
  profileForm: FormGroup;
  defaultPic: string;

  ngOnInit() {
    this.profileForm = this.fb.group({
      username: [''],
      email: [''],
      bio: [''],
    });
    
    if (this.user.profilePic === null) {
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

}
