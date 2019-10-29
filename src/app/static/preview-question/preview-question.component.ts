import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Question } from '../../models/Question';

@Component({
  selector: 'app-preview-question',
  templateUrl: './preview-question.component.html',
  styleUrls: ['./preview-question.component.css'],
})
export class PreviewQuestionComponent implements OnInit {
  @Input() question: Question;

  viewQuestion = () => {
    //Will change this
    this.router.navigate(['/view-question']);
  }

  constructor(public router: Router) {}

  ngOnInit() {}
}
