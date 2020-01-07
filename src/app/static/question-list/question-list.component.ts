import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Question } from '../../models/Question';
import { QuestionService } from 'src/app/services/question.service';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css'],
})
export class QuestionListComponent implements OnInit {
  @Input() questions: Question[];
  pageNumber = 0;

  constructor(private questionService: QuestionService,  private http: HttpClient, private _snackBar: MatSnackBar) { }

  ngOnInit() { }

 
}
