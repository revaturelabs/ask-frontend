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


  constructor(private usersService: UsersService, private route: ActivatedRoute) {
  }
  experts: User[];
  expert: User = null ;
  returnedExpert: User = null;
  returnedNames: User[] = [];
  getTopicId: number = 0;

  ngOnInit() {
   
    experts: User[];
    expert: User = null ;
    returnedExpert: User = null;
    returnedNames: User[] = [];
    getTopicId: number = 0;

    if (this.route.snapshot.paramMap.get('id') !== null) {
      this.getTopicId = + this.route.snapshot.paramMap.get('id');
    }
    this.usersService.getExperts().subscribe(expert => {
      this.experts = expert;
      this.filterExperts();
    });
  }

  filterExperts(): void {
    /*expert: User = null;
  returnExpert: User = null;
  returnNames: User[] = [];
  getTopicId: number = 0;*/
    for (let i = 0; i < this.experts.length; i++) {
      this.expert = this.experts[i];
      for (let j = 0; j < this.expert.expertTags.length; j++) {
        if (this.expert.expertTags[j].id === this.getTopicId) {
          this.returnedNames.push(this.experts[i]);
        }
      }
    }
  }
}

