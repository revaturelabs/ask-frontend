import { Component, OnInit, Input, Output } from '@angular/core';
import { Response } from '../../models/Response';
import { ResponseService } from 'src/app/services/response.service';
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

  @Input() response: Response = {
    id: 0,
    responderId: 0,
    questionId: 0,
    body: '',
    creationDate: ''
  }
  responseId: number;
  responses: Response[];
  isEdit: boolean = false;

  // Only the user who asked the question can highlight a response
  currentQuestionerId: number;
  currentUserId: any;
  currentQuestionObject: any;
  env = environment.questionsUri;

  constructor(
    private http: HttpClient,
    private questionService: QuestionService,
    private authService: AuthService,
    private _snackBar: MatSnackBar,
    private responseService: ResponseService,
  ) {}

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

  onNewResponse(response: Response) {
    this.responses.unshift(response);
  }
  
  editResponse(response: Response) {
    this.response = response;
    this.isEdit = true;
  }
  
  onUpdatedResponse(response: Response) {
    this.responses.forEach((cur, index) => {
      if(response.id === cur.id) {
        this.responses.splice(index, 1);
        this.responses.unshift(response);
        this.isEdit = false;
        this.response = {
          id: 0,
          responderId: 0,
          questionId: 0,
          body: '',
          creationDate: ''
        }
      }
    });
  }
  
  removeResponse(response: Response) {
    if(confirm('Are You Sure ?')) {
      this.responseService.removeResponse(response.id).subscribe(() => {
        this.responses.forEach((cur, index) => {
          if(response.id === cur.id) {
            this.responses.splice(index, 1);  
          }
        });
      });
    }
  }

  ngOnInit() {
    this.responseService.getResponses().subscribe(responses => {
      this.responses = responses;
    });
    let observable = this.http.get(`${environment.questionsUri}/${this.questionService.getQuestionId()}`);
    observable.subscribe(result => {
      this.currentQuestionObject = result;
      this.currentQuestionerId = this.currentQuestionObject.questionerId;
      this.currentUserId = this.authService.account.id;
    });
  }
}
