import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/Question';

@Component({
  selector: 'app-response-list',
  templateUrl: './response-list.component.html',
  styleUrls: ['./response-list.component.css']
})
export class ResponseListComponent implements OnInit {

  questionList : Question[];

  constructor() { }

  ngOnInit() {
    
  }

}
