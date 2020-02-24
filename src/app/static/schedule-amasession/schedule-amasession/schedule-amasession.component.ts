import { Component, OnInit } from '@angular/core';
import { AmaSession } from '../../../models/ama-session'
import { AmaService } from 'src/app/services/ama.service';
import { Tag } from 'src/app/models/Tag';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-schedule-amasession',

  templateUrl: './schedule-amasession.component.html',
  styleUrls: ['./schedule-amasession.component.css']
})
export class ScheduleAmasessionComponent implements OnInit {

  id: number;
  myDate = new Date();
  topic: Tag;
  expert: User;

  session: AmaSession = new AmaSession(this.id, this.myDate, this.topic, this.expert);


  constructor(public amaService: AmaService) { }

  ngOnInit() {
  }

  createAmaSession(){
    this.session.date = this.myDate;
    this.session.topic = this.topic;
    this.session.expert = this.expert;
    console.log(this.topic)
    this.amaService.createAmaSession(this.session).subscribe();
  }
  

}
