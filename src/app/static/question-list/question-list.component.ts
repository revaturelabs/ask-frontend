import { Component, OnInit, Input, Output, HostListener, EventEmitter } from '@angular/core';
import { Question } from '../../models/Question';


@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css'],
})
export class QuestionListComponent implements OnInit {
  @Input() questions: Question[];
  @Output() change: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() { }

  giveChange(event) {
    this.change.emit(3);
  }
}
