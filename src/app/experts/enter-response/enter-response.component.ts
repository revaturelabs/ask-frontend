import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Response } from '../../models/Response';
import { ResponseService } from '../../services/response.service';
import { QuestionService } from '../../services/question.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';


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
    id: 0,
    responderId: 3,
    questionId: 2,
    body: '',
    creationDate: null,
  };

  constructor(private responseService: ResponseService,
              private questionService: QuestionService) {}
    
    questionId : number;

  ngOnInit() {
    this.questionId = this.questionService.getQuestionId();
    console.log(this.questionId);
  }

  addResponse(body) {
    if (!body) {
      alert('Please add a Response');
    } else {
      this.response.body = body;
      this.response.questionId = this.questionId;
      console.log(this.response);
      this.responseService
        .saveResponse(this.response)
        .subscribe(response => {
          this.newResponse.emit(response);
        });
    }
  }

  updateResponse() {
    this.responseService
      .updateResponse(this.response)
      .subscribe(response => {
        console.log(response);
        this.isEdit = false;
        this.updatedResponse.emit(response);
      });
  }
}