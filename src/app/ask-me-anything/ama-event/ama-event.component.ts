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
    let dateToParse = new Date(this.event.date);
    this.year = dateToParse.getFullYear();
    return `${this.getMonthString(dateToParse.getMonth())} ${dateToParse.getDate()}`;
  }

  parseTime() : string{
    let dateToParse = new Date(this.event.date);
    return  `${dateToParse.getHours()%12}:${dateToParse.getMinutes()>9 ? '':'0'}${dateToParse.getMinutes()} ${dateToParse.getHours()%12 ? 'PM':'AM'}`;
  }

  getMonthString(monthNum : number) : string{
    switch(monthNum){
      case 1 : return 'JAN';
      case 2 : return 'FEB';
      case 3 : return 'MAR';
      case 4 : return 'APR';
      case 5 : return 'MAY';
      case 6 : return 'JUN';
      case 7 : return 'JUL';
      case 8 : return 'AUG';
      case 9 : return 'SEP';
      case 10: return 'OCT';
      case 11: return 'NOV';
      case 12: return 'DEC';
    }
  }
}
