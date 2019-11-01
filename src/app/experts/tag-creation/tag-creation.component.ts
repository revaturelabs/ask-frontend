import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tag } from '../../models/Tag';
import { environment } from '../../../environments/environment';
import {MatSnackBarModule, MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SelfTagsComponent } from '../self-tags/self-tags.component';



@Component({
  selector: 'app-tag-creation',
  templateUrl: './tag-creation.component.html',
  styleUrls: ['./tag-creation.component.css']
})
export class TagCreationComponent implements OnInit {

  constructor(private http: HttpClient, 
              private _snackBar: MatSnackBar,   
              private router: Router,
              private selfTags: SelfTagsComponent,
              ) { }
  tag: Tag = { id: 0, name: '' };

  ngOnInit() {

  }


  onSubmit() {
    
    this.http.post(environment.tagsUri, this.tag)
    .subscribe(
      (result) => {
        this._snackBar.open(`Tag Created`, 'OK', {duration: 4000});
        this.selfTags.ngOnInit();
        this.tag.name = "";
      }, (failure) => {
        this._snackBar.open(`Failed, possible duplicate tag.`, 'Try Again', {duration: 4000});
      }
    );
  }
}
