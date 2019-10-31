import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tag } from '../../models/Tag';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-tag-creation',
  templateUrl: './tag-creation.component.html',
  styleUrls: ['./tag-creation.component.css']
})
export class TagCreationComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  tag: Tag = { id: 0, name: '' };

  onSubmit() {
    console.log(this.tag);
    this.http.post(environment.tagsUri, this.tag)
    .subscribe(
      (result) => {console.log(result)}
    );
    
  }

}
