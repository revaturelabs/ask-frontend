import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-self-tags',
  templateUrl: './self-tags.component.html',
  styleUrls: ['./self-tags.component.css']
})
export class SelfTagsComponent implements OnInit {
onSubmit(f: NgForm) {
return true;

}
  constructor() { }

  ngOnInit() {
  }

}


