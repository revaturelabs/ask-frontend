import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { Question } from '../../models/Question';
import { TagService } from '../../services/tags.service';
import { Tags } from '../../models/Tags';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css'],
})
export class QuestionListComponent implements OnInit {
  questions: Question[];
  tags: Tags[];

  constructor(
    private questionService: QuestionService,
    private tagService: TagService,
  ) {}

  ngOnInit() {
    this.questionService.getQuestions().subscribe(questions => {
      this.questions = questions;
    });

    this.tagService.getTags().subscribe(tags => {
      this.tags = tags;
    });
  }
}
