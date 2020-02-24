import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-topic-experts',
  templateUrl: './topic-experts.component.html',
  styleUrls: ['./topic-experts.component.css']
})

export class TopicExpertsComponent implements OnInit {
  experts: User[];
  expertNames: User[] = [];
  topicId: number;
  constructor(private usersService: UsersService, private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id') !== null) {
      this.topicId = + this.route.snapshot.paramMap.get('id');
    }
    this.usersService.getExperts().subscribe(expert => {
      this.experts = expert;
      this.filterExperts();
    });
  }

  filterExperts(): void {
    for (let i = 0; i < this.experts.length; i++) {
      let expert = this.experts[i];
      for (let a = 0; a < expert.expertTags.length; a++) {
        if (expert.expertTags[a].id === this.topicId) {
          this.expertNames.push(this.experts[i]);
        }
      }
    }
  }
  showExpertProfile = selectedExpert => {
    // Place holder to route to the expert's profile page
    alert("This method will route you to the Expert's Profile");
    this.router.navigate([`/expert-profile-page/${selectedExpert.Id}`]);    
  }

  viewTopic = selectTagId => {
    this.router.navigate([`/view-topic/${selectTagId}`]);
  }




