import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Markdownoptions } from 'src/app/models/markdownoptions';
import { Tag } from '../../models/Tag';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
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

  selectedFile: File;
  inEditMode: boolean;
  editModeText: string;


  constructor(private authService: AuthService, private userService: UserService,
    private route: ActivatedRoute) { 
    this.options.hideIcons = ['FullScreen'];
    this.options.showPreviewPanel = false;
    this.inEditMode = false;
    this.editModeText = "Personalize";
  }

  ngOnInit() {
  }

  onFileChange(event) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    const uploadData = new FormData();
    uploadData.append('myImage', this.selectedFile, this.selectedFile.name)

    //this.authService.userProfilePic(uploadData);
  }

  editMode() {
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
