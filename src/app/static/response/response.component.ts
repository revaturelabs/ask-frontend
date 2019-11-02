import { Component, OnInit, Input } from '@angular/core';
import { Response } from '../../models/Response';
import { ResponseService } from '../../services/response.service';
import { QuestionService } from '../../services/question.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css'],
})
export class ResponseComponent implements OnInit {
  @Input() response: Response;

  responseId: number;

  constructor(
    private http: HttpClient,
    private questionService: QuestionService,
  ) {}

  env = environment.questionsUri;

  highlightResponse = (event, selectedResponse) => {
    this.responseId = selectedResponse;
    this.http
      .patch(`${this.env}/${this.response.questionId}`, {
        highlightedResponseId: this.responseId,
        /* * One issue is that when this PATCH request happens,
        * it will change the other fields in the Question to null
        * Possibly, a back end issue? Could be how PATCH is used
        */
      })
      .subscribe(
        data => {
          console.log('PATCH successful', data);
          // Will add snackbar or other notification here
        },
        error => {
          console.log('PATCH ERROR', error);
        },
      );
  };

  ngOnInit() {}
}
