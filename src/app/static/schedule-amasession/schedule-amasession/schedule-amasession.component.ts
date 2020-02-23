import { Component, OnInit } from '@angular/core';
import { AmaSession } from '../../../models/ama-session'
import { AmaService } from 'src/app/services/ama.service';

@Component({
  selector: 'app-schedule-amasession',
  templateUrl: './schedule-amasession.component.html',
  styleUrls: ['./schedule-amasession.component.css']
})
export class ScheduleAmasessionComponent implements OnInit {


  myDate = new Date();
  session: AmaSession = new AmaSession(7,this.myDate,'blah','John Revature');


  constructor(public amaService: AmaService) { }

  ngOnInit() {
  }

  postClick(){
    this.session.date = this.myDate;
    console.log("createSession()");
    console.log("Your id is: " + this.session.id);
    console.log("Your date is: " + this.session.date);
    console.log("Your topic is: " + this.session.topic);
    console.log("Your expert is: " + this.session.expert);
    this.amaService.createSession(this.session);
  }
  getClick(){
    this.session.date = this.myDate;
    console.log("getSession()");
    console.log("Your id is: " + this.session.id);
    console.log("Your date is: " + this.session.date);
    console.log("Your topic is: " + this.session.topic);
    console.log("Your expert is: " + this.session.expert);
    this.amaService.getSession();
  }

}
