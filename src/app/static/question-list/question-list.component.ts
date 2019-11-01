import { QuestionService } from '../../services/question.service';
import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../models/Question';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css'],
})
export class QuestionListComponent implements OnInit {
  @Input() questions: Question[];

  constructor(
    private questionService: QuestionService,
    private http: HttpClient,
  ) {}

  ngOnInit() {
    if (this.questionService.hasBeenFiltered === true) {
      this.questionService.getFilteredQuestions().subscribe(questions => {
        this.questions = questions;
      });
    } else {
      this.questionService.getQuestions().subscribe(questions => {
        this.questions = questions;
      });
    }
  }
}
