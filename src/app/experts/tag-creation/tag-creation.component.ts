import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tag } from '../../models/Tag';
import { environment } from '../../../environments/environment';
import {MatSnackBarModule, MatSnackBar} from '@angular/material/snack-bar';



@Component({
  selector: 'app-tag-creation',
  templateUrl: './tag-creation.component.html',
  styleUrls: ['./tag-creation.component.css']
})
export class TagCreationComponent implements OnInit {

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }
  tag: Tag = { id: 0, name: '' };

  ngOnInit() {
  }


  onSubmit() {
    this._snackBar.open(`Tag Created`);
    this.http.post(environment.tagsUri, this.tag)
    .subscribe(
      (result) => {
      }
    );
  }
}
