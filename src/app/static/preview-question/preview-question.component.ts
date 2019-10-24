import { Component, OnInit } from '@angular/core';
import { QUESTIONS } from '../../mock-questions';
import { ViewQuestionComponent } from '../view-question/view-question.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-preview-question',
  templateUrl: './preview-question.component.html',
  styleUrls: ['./preview-question.component.css']
})
export class PreviewQuestionComponent implements OnInit {

  // Passing mock dependencies in
  questions = QUESTIONS;
  // mock dependencies done

  viewQuestion = (() => {
    console.log('clicked');
    this.router.navigate(['/view-question']);
  });

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
