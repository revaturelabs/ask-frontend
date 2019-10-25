import { Component, OnInit, Input } from '@angular/core';
//import { QUESTIONS } from '../../mock-questions';
import { ViewQuestionComponent } from '../view-question/view-question.component';
import { Router } from '@angular/router';
import { Question } from '../../models/Question';


@Component({
  selector: 'app-preview-question',
  templateUrl: './preview-question.component.html',
  styleUrls: ['./preview-question.component.css']
})
export class PreviewQuestionComponent implements OnInit {

  @Input() question: Question;

  // Passing mock dependencies in
  //questions = QUESTIONS;
  // mock dependencies done


  viewQuestion = (() => {
    console.log('clicked');
    this.router.navigate(['/view-question']);
  });

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
