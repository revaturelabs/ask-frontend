import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tag } from '../../models/Tag';
import { environment } from '../../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-tag-creation',
  templateUrl: './tag-creation.component.html',
  styleUrls: ['./tag-creation.component.css'],
})
export class TagCreationComponent implements OnInit {
  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {}
  tag: Tag = { id: 0, name: '' };

  ngOnInit() {}

  onSubmit() {
    this.http.post(environment.tagsUri, this.tag).subscribe(
      (result) => {
        this._snackBar.open(`Tag Created`);
      },
      (error) => {
        this._snackBar.open(`Failed to Create Tag: ${error}`);
      }
      );
  }
}
