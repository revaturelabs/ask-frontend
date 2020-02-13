import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Tag } from '../../models/Tag';
// import { Markdownoptions } from 'src/app/models/markdownoptions';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private authService: AuthService) { }
  
  tags: Tag[] = this.authService.user.expertTags;

  ngOnInit() {
    console.log(this.authService.user.isExpert);
  }

}
