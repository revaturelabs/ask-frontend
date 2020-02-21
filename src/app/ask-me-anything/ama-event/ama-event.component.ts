import { Component, OnInit, Input } from '@angular/core';
import { AmaSession } from 'src/app/models/ama-session';

@Component({
  selector: 'app-ama-event',
  templateUrl: './ama-event.component.html',
  styleUrls: ['./ama-event.component.css']
})
export class AmaEventComponent implements OnInit {

  @Input()
  event : AmaSession;

  date : string;

  year : number;

  constructor() { }

  ngOnInit() {
  }

  parseDate(){
    return `${this.event.date.getMonth()} ${this.event.date.getDate()}`;
  }

  parseTime() : string{
    return  `${this.event.date.getHours()%12}:${this.event.date.getMinutes()} ${this.event.date.getHours()%12 ? 'AM':'PM'}`;
  }
}
