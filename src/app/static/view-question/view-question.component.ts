import { Component, OnInit } from '@angular/core';
import { ResponseService } from '../../services/response.service';
import { QuestionService } from '../../services/question.service';
import { Response } from 'src/app/models/Response';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.css'],
})
export class ViewQuestionComponent implements OnInit {
  /** For now, ViewQuestionComponent is tightly coupled with the QuestionService
   * and only displays the question whose id is saved in that service.
   * This should be a reusable component for displaying arbitrary questions, but
   * refactoring will take some doing and this works.  So selectedQuestion is
   * appropriate -- it will only ever be the question selected by the user elsewhere
   * on the site.
   */
  selectedQuestion: any;
  responses: Response[];

  constructor(
    private responseService: ResponseService,
    private questionService: QuestionService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.questionService.getQuestions().subscribe(questions => {
      for (const q in questions) {
        if (this.questionService.getQuestionId() === questions[q].id) {
          this.selectedQuestion = questions[q];
        }
      }
    });

    this.responses = [];
    this.responseService.getResponses().subscribe(responses => {
      this.responses = responses;
    });
  }
}
