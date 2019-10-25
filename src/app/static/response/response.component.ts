import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {
  @Input() expertName: string;
  @Input() date: string;
  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}