import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { QuestionService } from 'src/app/services/question.service';
import { Question } from 'src/app/models/Question';

@Component({
  selector: 'app-user-questions',
  templateUrl: './user-questions.component.html',
  styleUrls: ['./user-questions.component.css']
})
export class UserQuestionsComponent implements OnInit {
  userId: number;
  questions: Question[];
  userQuestions: Question[];

  constructor(private authService: AuthService, private http: HttpClient, private questionService:QuestionService) { }

  ngOnInit() {
    this.userId = this.authService.account.id;
    this.questionService.getQuestionsByUserId(this.userId).subscribe(result => {
      this.userQuestions = result;
      this.questions = this.userQuestions;
    });
  }
}