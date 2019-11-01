import { Component, OnInit, Input, Output } from '@angular/core';
import { Response } from '../../models/Response';
import { ResponseService } from 'src/app/services/response.service';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css'],
})
export class ResponseComponent implements OnInit {
  responses: Response[];
  @Input() response: Response = {
    id: 0,
    responderId: 0,
    questionId: 0,
    body: '',
    creationDate: ''
  }
    isEdit: boolean = false;
  ;

  constructor(private responseService: ResponseService) { }

  ngOnInit() {  
    this.responseService.getResponses().subscribe(responses => {
      this.responses = responses;
    });
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
  
  }