import { Component, OnInit } from '@angular/core';
import { AmaSession } from 'src/app/models/ama-session';
import { AmaService } from 'src/app/services/ama.service';

@Component({
  selector: 'app-ama-schedule',
  templateUrl: './ama-schedule.component.html',
  styleUrls: ['./ama-schedule.component.css']
})
export class AmaScheduleComponent implements OnInit {

  schedule : AmaSession[] = [];

  constructor(private amaService : AmaService) { }

  ngOnInit() {
    this.schedule.push(new AmaSession(0, new Date(), "Test Topic", "Danny Rubbo"));
    this.schedule.push(new AmaSession(0, new Date(), "Test Topic", "Danny Rubbo"));
    this.schedule.push(new AmaSession(0, new Date(), "Test Topic", "Danny Rubbo"));
    this.schedule.push(new AmaSession(0, new Date(), "Test Topic", "Danny Rubbo"));
    this.schedule.push(new AmaSession(0, new Date(), "Test Topic", "Danny Rubbo"));
    this.schedule.push(new AmaSession(0, new Date(), "Test Topic", "Danny Rubbo"));
    this.schedule.push(new AmaSession(0, new Date(), "Test Topic", "Danny Rubbo"));
    this.schedule.push(new AmaSession(0, new Date(), "Test Topic", "Danny Rubbo"));
    this.schedule.push(new AmaSession(0, new Date(), "Test Topic", "Danny Rubbo"));
    this.schedule.push(new AmaSession(0, new Date(), "Test Topic", "Danny Rubbo"));
    this.schedule.push(new AmaSession(0, new Date(), "Test Topic", "Danny Rubbo"));
  }

  openSession(event){
    console.log(event);
  }

  formateDate(date : Date){
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()%12}:${date.getMinutes()} ${date.getHours()%12 ? 'AM' : 'PM'}`;
  }
}
