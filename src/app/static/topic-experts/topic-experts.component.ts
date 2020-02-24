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
  expert: User = null;
  returnNames: User[] = [];
  getTopicId: number = 0;
  constructor(
    private usersService: UsersService, 
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id') !== null) {
      this.getTopicId = +this.route.snapshot.paramMap.get('id');
    }
    this.usersService.getExperts().subscribe(expert => {
      this.experts = expert;
      this.filterExperts();
    });
  }

  filterExperts(): void {
    for (let i = 0; i < this.experts.length; i++) {
      this.expert = this.experts[i];
      for (let j = 0; j < this.expert.expertTags.length; j++) {
        if (this.expert.expertTags[j].id === this.getTopicId) {
          this.returnNames.push(this.experts[i]);
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

}
