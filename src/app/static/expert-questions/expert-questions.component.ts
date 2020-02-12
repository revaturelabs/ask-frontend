import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Question } from 'src/app/models/Question';

@Component({
  selector: 'app-expert-questions',
  templateUrl: './expert-questions.component.html',
  styleUrls: ['./expert-questions.component.css'],
})
export class ExpertQuestionsComponent implements OnInit {
  expertId: Number;
  expert: any;
  filteredUri: string;
  filterTags: string[];
  uriTags: string = '';
  filteredQuestions: any;
  questions: Question[];

  constructor(private authService: AuthService, private http: HttpClient) { }

  ngOnInit() {
    this.expertId = this.authService.account.id;
    this.http.get(`${environment.userUri}/${this.expertId}`).subscribe(result => {
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
      this.http.get(this.filteredUri).subscribe(filteredResult => {
        this.filteredQuestions = filteredResult;
        this.questions = this.filteredQuestions;

      })
    });
  }
}
