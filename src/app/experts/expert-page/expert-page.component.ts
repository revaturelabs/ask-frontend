import { Component, OnInit } from '@angular/core';
import { ResponseService } from '../../services/response.service';
import { Response } from '../../models/Response';


@Component({
selector: 'app-expert-page',
templateUrl: './expert-page.component.html',
styleUrls: ['./expert-page.component.css']
})
export class ExpertPageComponent implements OnInit {
responses: Response[];
currentResponse: Response = {
  id: 0,
  responderId: 0,
  title: '',
  body: '',
  creationDate: '',
}
isEdit: boolean = false;

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
  this.currentResponse = response;
  this.isEdit = true;
}

onUpdatedResponse(response: Response) {
  this.responses.forEach((cur, index) => {
    if(response.id === cur.id) {
      this.responses.splice(index, 1);
      this.responses.unshift(response);
      this.isEdit = false;
      this.currentResponse = {
        id: 0,
        responderId: 0,
        title: '',
        body: '',
        creationDate: '',
      }
    }
  });
}

removeResponse(response: Response) {
  if(confirm('Are You Sure?')) {
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