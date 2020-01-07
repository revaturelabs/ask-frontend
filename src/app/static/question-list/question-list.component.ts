import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Question } from '../../models/Question';


@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css'],
})
export class QuestionListComponent implements OnInit {
  @Input() questions: Question[];

  constructor() { }

  ngOnInit() { }
}
