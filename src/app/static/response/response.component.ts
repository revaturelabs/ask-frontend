import { Component, OnInit, Input } from '@angular/core';
import { Response } from '../../models/Response';
import { ResponseService } from '../../services/response.service';
import { QuestionService } from '../../services/question.service';
import { AuthService } from '../../services/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css'],
})
export class ResponseComponent implements OnInit {
  @Input() response: Response;

  responseId: number;

  // Only the user who asked the question can highlight a response
  currentQuestionerId: number;
  currentUserId: any;
  currentQuestionObject: any;

  constructor(
    private http: HttpClient,
    private questionService: QuestionService,
    private authService: AuthService,
    private _snackBar: MatSnackBar,
  ) {}

  env = environment.questionsUri;

  highlightResponse = (event, selectedResponse) => {
    this.http
      .patch(`${this.env}/${this.response.questionId}/highlightedResponseId`, selectedResponse
      )
      .subscribe(
        data => {
          console.log('PATCH successful', data);
          this._snackBar.open('Highlighted Answer', '', {
            duration: 2000,
          });
        },
        error => {
          console.log('PATCH ERROR', error);
        },
      );
  }

  ngOnInit() {
    let observable = this.http.get(`${environment.questionsUri}/${this.questionService.getQuestionId()}`);
    observable.subscribe(result => {
      this.currentQuestionObject = result;
      this.currentQuestionerId = this.currentQuestionObject.questionerId;
      this.currentUserId = this.authService.account.id;
    });
  }
}
