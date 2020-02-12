import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { environment } from 'src/environments/environment';
import { Question } from 'src/app/models/Question';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-questions',
  templateUrl: './user-questions.component.html',
  styleUrls: ['./user-questions.component.css']
})
export class UserQuestionsComponent implements OnInit {
  userId: number;
  questions: Question[];
  userQuestions: any;

  constructor(private authService: AuthService, private http: HttpClient) { }

  ngOnInit() {
    this.userId = this.authService.account.id;
    this.http.get(`${environment.userUri}/${this.userId}/questions`).subscribe(result => {
      this.userQuestions = result;
      this.questions = this.userQuestions;
    })
  }
}
