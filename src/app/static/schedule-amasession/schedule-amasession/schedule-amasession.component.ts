import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-amasession',
  templateUrl: './schedule-amasession.component.html',
  styleUrls: ['./schedule-amasession.component.css']
})
export class ScheduleAmasessionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  testFunc(){
    console.log("This is from testFunc()")
  }

}