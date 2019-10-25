import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tags } from '../../models/Tags';

@Component({
  selector: 'app-tag-creation',
  templateUrl: './tag-creation.component.html',
  styleUrls: ['./tag-creation.component.css']
})
export class TagCreationComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  tag: Tags = { id: 0, tagName: '' };

  //need to change Endpoint
  endpoint: string = "/tag";

  onSubmit() {
    this.http.post(this.endpoint, JSON.stringify(this.tag));
  }

}
