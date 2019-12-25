import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Response } from '../../models/Response';
import { ResponseService } from '../../services/response.service';
import { QuestionService } from '../../services/question.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { AuthService } from 'src/app/services/auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MarkedjsOption } from 'ngx-markdown-editor';

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

  options: {
    showPreviewPanel?: boolean    // Show preview panel, Default is true
    showBorder?: boolean          // Show editor component's border. Default is true
    hideIcons?: Array<string>     // ['Bold', 'Italic', 'Heading', 'Refrence', 'Link', 'Image', 'Ul', 'Ol', 'Code', 'TogglePreview', 'FullScreen']. Default is empty
    usingFontAwesome5?: boolean   // Using font awesome with version 5, Default is false
    scrollPastEnd?: number        // The option for ace editor. Default is 0
    enablePreviewContentClick?: boolean  // Allow user fire the click event on the preview panel, like href etc. Default is false
    resizable?: boolean           // Allow resize the editor
    markedjsOpt?: MarkedjsOption  // The markedjs option, see https://marked.js.org/#/USING_ADVANCED.md#options
    customRender?: {              // Custom markedjs render
      image?: Function     // Image Render
      table?: Function     // Table Render
      code?: Function      // Code Render
      listitem?: Function  // Listitem Render
    }
  };
    
  public mode: string = 'editor';
  
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
          this.router.navigate(['/expert-questions']);
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

  // *****************
  // * Testing Stuff
  // *****************

}
