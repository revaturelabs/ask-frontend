import { Component, OnInit, Input } from '@angular/core';
import { AmaSession } from 'src/app/models/ama-session';
import { AmaService } from 'src/app/services/ama.service';
import { HttpClient } from '@angular/common/http';
import { Tag } from 'src/app/models/Tag';

@Component({
  selector: 'app-ama-schedule',
  templateUrl: './ama-schedule.component.html',
  styleUrls: ['./ama-schedule.component.css']
})
export class AmaScheduleComponent implements OnInit {

  schedule : AmaSession[] = [];

  @Input()
  expert : number = null;
  @Input()
  inputTag : Tag = null;

  constructor(private amaService : AmaService) { }

  ngOnInit() {
    
    if(this.expert) this.amaService.getAmaListByExpert(this.expert).subscribe((data)=>{
      this.schedule = data;
    });
    else this.amaService.getAmaList().subscribe((data)=>{
      
      if (this.inputTag) {
        for(let amaSession of data) {
          if (amaSession.topic.id === this.inputTag.id) {
            this.schedule.push(amaSession);
          }
        }
      } else {
        this.schedule = data;
      }
    })
  }

  openSession(event){
  }

  formatDate(date : Date){
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()%12}:${date.getMinutes()} ${date.getHours()%12 ? 'AM' : 'PM'}`;
  }
}
