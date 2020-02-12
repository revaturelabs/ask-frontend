import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Question } from '../../models/Question';
import { HttpClient } from '@angular/common/http';
import { QuestionService } from 'src/app/services/question.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-filtered-question-list',
  templateUrl: './filtered-question-list.component.html',
  styleUrls: ['./filtered-question-list.component.css'],
})
export class FilteredQuestionListComponent implements OnInit, OnChanges {
  hasBeenFiltered: boolean = false;
  loadMoreEnable: boolean = true;
  moreQuestions: boolean = true;
  filteredUri: string;
  questions: Question[];
  pageNumber: number = 0;
  tags: string[] = [];
  selectedQuestion: Question;

  constructor(
    private http: HttpClient,
    private questionService: QuestionService,
    private _snackBar: MatSnackBar,
  ) { }

  setFilteredStatusAndRefreshQuestions(newFilteredStatus: boolean) {
    this.pageNumber = 0;
    this.loadMoreEnable = true;
    this.hasBeenFiltered = newFilteredStatus;
    if (this.hasBeenFiltered === false) {
      this.refreshQuestions();
    }
  }

  setQuestionsListWithFilteredUri(newFilteredUri: string) {
    this.filteredUri = newFilteredUri;
    this.http.get<Question[]>(newFilteredUri).subscribe(filteredQuestions => {
      this.questions = filteredQuestions;
      if (this.questions.length === 0) {
        this._snackBar.open('No results!', 'OK', { duration: 3000 });
        this.loadMoreEnable = false;
      }
      if (this.questions.length >= 20) {
        this.loadMoreEnable = true;
      }

    });
  }

  getFilteredQuestions() {
    return this.http.get<Question[]>(this.filteredUri);
  }

  filterLoadMore() {
    this.pageNumber += 1;
    this.http.get<Question[]>(`${this.filteredUri}&page=${this.pageNumber}`).subscribe(questionsRes => {
      this.questions.push.apply(this.questions, questionsRes);
      if (questionsRes.length === 0) {
        this._snackBar.open('No more results!', 'OK', { duration: 3000 });
        this.loadMoreEnable = false;
        this.pageNumber = 0;
      }
    });
  }

  refreshQuestions() {
    if (this.hasBeenFiltered === true) {
      this.getFilteredQuestions().subscribe(filteredQuestions => {
        if (filteredQuestions.length === 0) {
          this.loadMoreEnable = false;
        } else {
          this.questions = filteredQuestions;
        }
      });
    } else {
      this.questionService.getQuestions().subscribe(unfilteredQuestions => {
        this.questions = unfilteredQuestions;
      });
    }
  }

  loadMore() {
    this.pageNumber += 1;
    this.http.get<Question[]>(`${environment.questionsUri}?page=${this.pageNumber}`).subscribe(questionsRes => {
      this.questions.push.apply(this.questions, questionsRes);
      if (questionsRes.length === 0) {
        this._snackBar.open('No more results!', 'OK', { duration: 3000 });
        this.loadMoreEnable = false;
        this.pageNumber = 0;
      }
    });
  }
  nextPage() {
    this.pageNumber++;
    this.http.get<Question[]>(`${this.filteredUri}&page=${this.pageNumber}`).subscribe(filteredQuestions => {
      this.questions = filteredQuestions;
      if (this.questions.length === 0) {
        this._snackBar.open('No more results', 'OK', {duration: 3000});
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

  ngOnChanges() {
    if(this.questionService.getQuestionId()) {
      this.questionService.getQuestionById(this.questionService.getQuestionId()).subscribe((data)=>{
        this.selectedQuestion = data;
      });
      console.log(this.selectedQuestion);
    } else {
      console.log("onChange fired without right id.")
    }
  }

  questionChange(event) {
    this.ngOnChanges();
    window.scrollTo(0,0);
  }
}
