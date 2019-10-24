import { Component, OnInit } from '@angular/core';
import { QUESTIONS } from '../../mock-questions';
import { RESPONSES } from '../../mock-responses';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.css']
})
export class ViewQuestionComponent implements OnInit {

  //Passing mock dependencies in
  question=QUESTIONS[1];
  responses=RESPONSES;
  //mock dependencies done

  constructor() { }

  ngOnInit() {
  }

}
