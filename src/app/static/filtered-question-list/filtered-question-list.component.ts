import { Component, OnInit } from '@angular/core';
import { Question } from '../../models/Question';
import { HttpClient } from '@angular/common/http';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-filtered-question-list',
  templateUrl: './filtered-question-list.component.html',
  styleUrls: ['./filtered-question-list.component.css'],
})
export class FilteredQuestionListComponent implements OnInit {
  newFilteredStatus: boolean;
  newFilteredUri: string;
  hasBeenFiltered: boolean = false;
  filteredUri: string;
  questions: Question[];

  constructor(
    private http: HttpClient,
    private questionService: QuestionService,
  ) {}

  setFilteredStatus(newFilteredStatus: boolean) {
    this.hasBeenFiltered = newFilteredStatus;
    if (this.hasBeenFiltered === false) {
      this.ngOnInit();
    }
  }

  setFilteredUri(newFilteredUri: string) {
    this.filteredUri = newFilteredUri;
    this.http.get<Question[]>(this.filteredUri).subscribe(filteredQuestions => {
      this.questions = filteredQuestions;
    });
  }

  getFilteredQuestions() {
    console.log(this.newFilteredUri);
    return this.http.get<Question[]>(this.newFilteredUri);
  }

  ngOnInit() {
    if (this.hasBeenFiltered === true) {
      this.getFilteredQuestions().subscribe(filteredQuestions => {
        this.questions = filteredQuestions;
      });
    } else {
      this.questionService.getQuestions().subscribe(unfilteredQuestions => {
        this.questions = unfilteredQuestions;
      });
    }
  }
}
