import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '../../services/question.service';
import { Question } from '../../models/Question';
import { Tag } from '../../models/Tag';

/**
 * @author: Alec Thavychith
 *
 * Populating the QuestionListComponent with PreviewQuestionComponents
 *
 */

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

  // On click of the 'View' button, it sets the question ID of the selected question
  viewQuestion = selectQuestionId => {
    // Stores selected question ID in the QuestionService for use in the ViewQuestionComponent
    this.questionIdService.setQuestionId(selectQuestionId);
    this.router.navigate([`/view-question/`]);
  }

  ngOnInit() { }

  sethigh(){
    let classes = {
      question: true,
      high: this.question.highlightedResponseId != null
    }
    return classes;
  }
}
