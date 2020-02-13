import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Markdownoptions } from 'src/app/models/markdownoptions';
import { Tag } from '../../models/Tag';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private authService: AuthService) { 
    this.options.hideIcons = ['FullScreen'];
    this.options.showPreviewPanel = false;
    this.inEditMode = false;
    this.editModeText = "Personalize";
  }

  options: Markdownoptions = new Markdownoptions();
  user = this.authService.user;
  isAssociate = () : boolean => false;
  selectedFile: File;
  inEditMode: boolean;
  editModeText: string;

  ngOnInit() {
    console.log(this.authService.user.isExpert);
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

}
