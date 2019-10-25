import { Component, OnInit } from '@angular/core';
// import { Question } from '../question';
import { QUESTIONS } from '../../mock-questions';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  //Passing mock dependencies in
  questions=QUESTIONS;
  //mock dependencies done

  constructor() { }

  ngOnInit() {
  }

}
