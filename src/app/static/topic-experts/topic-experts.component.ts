import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-topic-experts',
  templateUrl: './topic-experts.component.html',
  styleUrls: ['./topic-experts.component.css']
})

export class TopicExpertsComponent implements OnInit {
  experts: User[];
  expert: User = null;
  returnExpert: User = null;
  returnNames: User[] = [];
  getTopicId: number = 0;
  constructor(private usersService: UsersService,private route: ActivatedRoute) {}

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id') !== null) {
      this.getTopicId = +this.route.snapshot.paramMap.get('id');
    }
    this.usersService.getExpertTags().subscribe(expert => {
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

}
