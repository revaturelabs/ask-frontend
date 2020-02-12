import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Markdownoptions } from 'src/app/models/markdownoptions';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private authService: AuthService) { 
    this.options.hideIcons = ['FullScreen'];
    this.options.showPreviewPanel = false;
  }

  options: Markdownoptions = new Markdownoptions();

  isAssociate = () : boolean => false;

  ngOnInit() {
  }

  selectedFile: File;

  onFileChange(event) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    const uploadData = new FormData();
    uploadData.append('myImage', this.selectedFile, this.selectedFile.name)

    this.authService.userProfilePic(uploadData);
  }

}
