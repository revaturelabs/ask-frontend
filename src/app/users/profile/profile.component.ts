import { Component, OnInit } from '@angular/core';
import { Markdownoptions } from 'src/app/models/markdownoptions';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  options: Markdownoptions = new Markdownoptions();

  constructor() {
    this.options.hideIcons = ['FullScreen'];
    this.options.showPreviewPanel = false;
  }

  isAssociate = () : boolean => false;

  ngOnInit() {
  }

}
