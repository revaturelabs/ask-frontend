import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Response } from '../../models/Response';
import { ResponseService } from '../../services/response.service';
import { QuestionService } from '../../services/question.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { AuthService } from 'src/app/services/auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Markdownoptions } from 'src/app/models/markdownoptions';

@Component({
  selector: 'app-enter-response',
  templateUrl: './enter-response.component.html',
  styleUrls: ['./enter-response.component.css'],
})
export class EnterResponseComponent implements OnInit {
  @Output() newResponse: EventEmitter<Response> = new EventEmitter();
  @Output() updatedResponse: EventEmitter<Response> = new EventEmitter();
  @Input() isEdit: boolean;
  @Input() response: Response = {
    user: null,
    id: 0,
    responderId: 0,
    questionId: 0,
    body: '',
    creationDate: null,
  };
  private options = new Markdownoptions();
  public mode = 'editor';

  constructor(
    private responseService: ResponseService,
    private questionService: QuestionService,
    private authService: AuthService,
    private _snackBar: MatSnackBar,
    private router: Router,
  ) {}

  questionId: number;

  ngOnInit() {
    this.questionId = this.questionService.getQuestionId();
    this.options.hideIcons = ['FullScreen'];
  }

  addResponse(body) {
    if (!body) {
      this._snackBar.open('Please add a Response!', 'OK!', { duration: 3000 });
    } else {
      this.response.body = body;
      this.response.questionId = this.questionId;
      this.response.responderId = this.authService.account.id;
      this.responseService.saveResponse(this.response).subscribe(
        response => {
          this.newResponse.emit(response);
          this._snackBar.open('Thank you for your Response', ' ', {
            duration: 3000,
          });
          this.response.body = null;
          this.router.navigate(['/view-question']);
        },
        failure => {
          this._snackBar.open('Response Submission Failed', ' ', {
            duration: 3000,
          });
        },
      );
    }
  }

  updateResponse() {
    this.responseService.updateResponse(this.response).subscribe(response => {
      this.isEdit = false;
      this.updatedResponse.emit(response);
    });
  }
}
