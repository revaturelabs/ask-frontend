import { Component, OnInit } from '@angular/core';
import { AmaSession } from '../../../models/ama-session'
import { AmaService } from 'src/app/services/ama.service';
import { Tag } from 'src/app/models/Tag';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { TagService } from 'src/app/services/tags.service';

@Component({
  selector: 'app-schedule-amasession',

  templateUrl: './schedule-amasession.component.html',
  styleUrls: ['./schedule-amasession.component.css']
})
export class ScheduleAmasessionComponent implements OnInit {

  id: number;
  myDate = new Date();

  topic: Tag;
  expert: User = new User();

  session: AmaSession = new AmaSession(this.id, this.myDate, this.topic, this.expert);


  constructor(public amaService: AmaService, public authService: AuthService, private route : ActivatedRoute, public tagService: TagService) { }

  ngOnInit() {
    this.expert.id = this.authService.account.id;
    console.log(this.authService.account.id)
    console.log("The user logged in is: " + this.expert.id)
    let id =+ this.route.snapshot.paramMap.get('id');
    this.tagService.getTagById(id).subscribe((data)=>{
      this.topic = data;
      console.log(this.topic)
    });
    
  }

  createAmaSession(){
    this.session.date = this.myDate;
    this.session.topic = this.topic;
    this.session.expert = this.expert;
    this.amaService.createAmaSession(this.session).subscribe();
  }
  

}
