import { Component, OnInit } from '@angular/core';
import { ResponseService } from '../../services/response.service';
import { QuestionService } from '../../services/question.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.css'],
})
export class ViewQuestionComponent implements OnInit {
  selectedQuestion: any;

  allResponses: any[];

  constructor(
    private responseService: ResponseService,
    private questionService: QuestionService,
  ) {}

  ngOnInit() {
    this.questionService.getQuestions().subscribe(questions => {
      for (const q in questions) {
        if (this.questionService.getQuestionId() === questions[q].id) {
          this.selectedQuestion = questions[q];
        }
      }
    });

    this.allResponses = [];
    this.responseService.getResponses().subscribe(response => {
      for (let r in response) {
        this.allResponses.push(response[r]);
      }
    });
  }
}
