import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '../../services/question.service';
import { Question } from '../../models/Question';
import { Tag } from '../../models/Tag';

@Component({
  selector: 'app-preview-question',
  templateUrl: './preview-question.component.html',
  styleUrls: ['./preview-question.component.css'],
})
export class PreviewQuestionComponent implements OnInit {
  @Input() question: Question;
  @Input() tag: Tag;

  constructor(
    public router: Router,
    private questionIdService: QuestionService,
  ) {}

  viewQuestion = selectQuestionId => {
    this.questionIdService.setQuestionId(selectQuestionId);
    this.router.navigate([`/view-question/`]);
  }

  ngOnInit() {}
}
