import { Component, OnInit } from '@angular/core';
import { ResponseService } from '../../services/response.service';
import { Response } from 'src/app/models/Response';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.css'],
})
export class ViewQuestionComponent implements OnInit {
  responses: Response[];

  constructor(private responseService: ResponseService) {}

  ngOnInit() {
    this.responses = [];
    this.responseService.getResponses().subscribe(responses => {
      this.responses = responses;
    });
  }
}
