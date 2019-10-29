import { Component, OnInit, Input } from '@angular/core';
import { Response } from '../../models/Response';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css'],
})
export class ResponseComponent implements OnInit {
  @Input() currentResponse: Response = {
    id: 0,
    responderId: 0,
    title: '',
    body: '',
    creationDate: ''
  };

  constructor() {}

  ngOnInit() {}
}
