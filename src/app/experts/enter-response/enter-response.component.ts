import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Response } from '../../models/Response';
import { ResponseService } from '../../services/response.service';

@Component({
  selector: 'app-enter-response',
  templateUrl: './enter-response.component.html',
  styleUrls: ['./enter-response.component.css'],
})

export class EnterResponseComponent implements OnInit {
  @Output() newResponse: EventEmitter<Response> = new EventEmitter();
  @Output() updatedResponse: EventEmitter<Response> = new EventEmitter();
  @Input() currentResponse: Response;
  @Input() isEdit: boolean;

  constructor(private responseService: ResponseService) {}

  ngOnInit() {}

  addResponse(title, body) {
    if (!title || !body) {
      alert('Please add a Response');
    } else {
      this.responseService
        .saveResponse({ title, body } as Response)
        .subscribe(response => {
          this.newResponse.emit(response);
        });
    }
  }

  updateResponse() {
    this.responseService
      .updateResponse(this.currentResponse)
      .subscribe(response => {
        console.log(response);
        this.isEdit = false;
        this.updatedResponse.emit(response);
      });
  }
}
