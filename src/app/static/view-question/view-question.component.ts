import { Component, OnInit } from '@angular/core';
import { RESPONSES } from '../../mock-responses';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.css'],
})
export class ViewQuestionComponent implements OnInit {
  //Passing mock dependencies in
  responses = RESPONSES;

  allResponses: any[];

  constructor() {}

  ngOnInit() {
    this.allResponses = [];
    for (let i = 0; i < this.responses.length; i++) {
      this.allResponses.push({
        expertName: this.responses[i].expertName,
        date: this.responses[i].date,
        text: this.responses[i].text,
      });
    }
  }
}
