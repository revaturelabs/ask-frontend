import { Component, OnInit } from '@angular/core';
import { ResponseService } from '../../services/response.service';
import { QuestionService } from '../../services/question.service';
import { Response } from 'src/app/models/Response';

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
  highlightedResponse: any;
  questionResponses: any;

  constructor(
    private responseService: ResponseService,
    private questionService: QuestionService,
  ) {}

  ngOnInit() {

    const selectedQuestionId = this.questionService.getQuestionId();

    this.questionService.getQuestions().subscribe(questions => {
      for (const q in questions) {
        if (selectedQuestionId === questions[q].id) {
          this.selectedQuestion = questions[q];
        }
      }
    });

    this.questionService.getQuestionById(selectedQuestionId).subscribe(result => {
      if (result.highlightedResponseId != null) {
        this.responseService.getResponses().subscribe(highlight => {
          for (const h in highlight) {
            let questionId = highlight[h].question.id;
            if (questionId === selectedQuestionId) {
              console.log(highlight[h]);
            }
          }
        });
      } else {
        console.log("No highlighted responses");
      }
    });

    // Retrieving responses based on the selected question
    this.questionService.getQuestionById(selectedQuestionId).subscribe(result => {
      this.questionResponses = result.responses;
    });

  }
}
