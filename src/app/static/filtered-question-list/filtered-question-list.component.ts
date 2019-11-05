import { Component, OnInit } from '@angular/core';
import { Question } from '../../models/Question';
import { HttpClient } from '@angular/common/http';
import { QuestionService } from 'src/app/services/question.service';

import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-filtered-question-list',
  templateUrl: './filtered-question-list.component.html',
  styleUrls: ['./filtered-question-list.component.css'],
})
export class FilteredQuestionListComponent implements OnInit {
  hasBeenFiltered: boolean = false;
  filteredUri: string;
  questions: Question[];
  pageNumber: number = 0;

  constructor(
    private http: HttpClient,
    private questionService: QuestionService,
    private _snackBar: MatSnackBar,
  ) {}

  setFilteredStatusAndRefreshQuestions(newFilteredStatus: boolean) {
    this.hasBeenFiltered = newFilteredStatus;
    if (this.hasBeenFiltered === false) {
      this.refreshQuestions();
    }
  }

  setQuestionsListWithFilteredUri(newFilteredUri: string) {
    this.filteredUri = newFilteredUri;
    this.http.get<Question[]>(this.filteredUri).subscribe(filteredQuestions => {
      this.questions = filteredQuestions;
      if(this.questions.length == 0) {
        this._snackBar.open("No results!", "OK", {duration: 3000});
      }
    });
  }

  getFilteredQuestions() {
    return this.http.get<Question[]>(this.filteredUri);
  }

  refreshQuestions() {
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

  nextPage() {
    this.pageNumber++;
    this.http.get<Question[]>(`${this.filteredUri}&page=${this.pageNumber}`).subscribe(filteredQuestions => {
      this.questions = filteredQuestions;
      if(this.questions.length == 0) {
        this._snackBar.open("No more results!", "OK", {duration: 3000});
      }
    });
  }

  previousPage() {
    this.pageNumber--;
    this.http.get<Question[]>(`${this.filteredUri}&page=${this.pageNumber}`).subscribe(filteredQuestions => {
        this.questions = filteredQuestions;
        if(this.questions.length == 0) {
          this._snackBar.open("No more results!", "OK", {duration: 3000});
        }
      });
    }

  onNextPage() {
    if(this.pageNumber > 0) {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit() {
    this.questionService.getQuestions().subscribe(unfilteredQuestions => {
      this.questions = unfilteredQuestions;
    });
  }
}