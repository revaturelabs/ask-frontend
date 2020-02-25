import { Component, OnInit } from '@angular/core';
import { AmaSession } from '../../../models/ama-session'
import { AmaService } from 'src/app/services/ama.service';
import { Tag } from 'src/app/models/Tag';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
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

  hour: any;
  minute: any;
  meridiem: any;

  session: AmaSession = new AmaSession(this.id, this.myDate, this.topic, this.expert);

  hours: any[] = [
    {value: 1, viewValue: '1'}, {value: 2, viewValue: '2'}, {value: 3, viewValue: '3'},
    {value: 4, viewValue: '4'}, {value: 5, viewValue: '5'}, {value: 6, viewValue: '6'},
    {value: 7, viewValue: '7'}, {value: 8, viewValue: '8'}, {value: 9, viewValue: '9'},
    {value: 10, viewValue: '10'}, {value: 11, viewValue: '11'}, {value: 12, viewValue: '12'},
  ];
  minutes: any[] = [
    {value: 0, viewValue: '00'}, {value: 15, viewValue: '15'}, {value: 30, viewValue: '30'}, {value: 45, viewValue: '45'},
  ];
  meridiems: any[]=[
    {value: 'AM', viewValue: 'AM'}, {value: 'PM', viewValue: 'PM'},
  ]

  constructor(public amaService: AmaService, public authService: AuthService, private route : ActivatedRoute, public tagService: TagService, public router: Router) { }

  ngOnInit() {
    this.expert.id = this.authService.account.id;
    let id =+ this.route.snapshot.paramMap.get('id');
    this.tagService.getTagById(id).subscribe((data)=>{
      this.topic = data;
    });
  }

  createAmaSession(){
    if(this.hour == 12 && this.meridiem == "AM"){
      this.hour = 0;
    }
    if(this.meridiem == "PM"){
      this.hour = 24 + this.hour - 12;
    };
    this.session.date = new Date(this.myDate.setHours(this.hour, this.minute, 0));
    this.session.topic = this.topic;
    this.session.expert = this.expert;
    this.amaService.createAmaSession(this.session).subscribe();
    this.router.navigate(['/topic/all'])
  }

}
