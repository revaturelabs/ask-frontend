import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { environment } from 'src/environments/environment';
import { Question } from 'src/app/models/Question';
import { TagService } from 'src/app/services/tags.service';

@Component({
  selector: 'app-expert-questions',
  templateUrl: './expert-questions.component.html',
  styleUrls: ['./expert-questions.component.css'],
})
export class ExpertQuestionsComponent implements OnInit {
  expertId: number;
  expert: any;
  filteredUri: string;
  filterTags: string[];
  uriTags: string = '';
  filteredQuestions: Question[];
  questions: Question[];

  constructor(private authService: AuthService, private tagService: TagService) { }

  ngOnInit() {
    this.expertId = this.authService.account.id;
    this.authService.getExpert(this.expertId).subscribe(result => {
      this.expert = result;
      let tags = new Array<string>();
      for (let i = 0; i < this.expert.expertTags.length; i++) {
        tags.splice(i, 0, this.expert.expertTags[i].name);
      }
      this.filterTags = tags;
      for (let j = 0; j < this.filterTags.length; j++) {
        this.uriTags += '&tag=' + this.filterTags[j];
      }
      this.filteredUri = `${environment.questionsUri}/search/?requireAll=false${this.uriTags}`;
      this.tagService.filterQuestionTags(this.filteredUri).subscribe(filteredResult => {
        this.filteredQuestions = filteredResult;
        this.questions = this.filteredQuestions;
      })
    });
  }
}
