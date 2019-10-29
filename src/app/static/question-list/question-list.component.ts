import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { Question } from '../../models/Question';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css'],
})
export class QuestionListComponent implements OnInit {
  questions: Question[];

  constructor(private questionService: QuestionService) {}

  ngOnInit() {
    this.questionService.getQuestions().subscribe(questions => {
      this.questions = questions;
    });
  }
}
