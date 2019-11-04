import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question.service';

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
    private questionService: QuestionService,
  ) {}

  ngOnInit() {
    const selectedQuestionId = this.questionService.getQuestionId();

    this.questionService.getQuestionById(selectedQuestionId).subscribe(question => {
      this.selectedQuestion = question;
    });

    // Retrieving the highlighted response for a specified question
    this.questionService
      .getQuestionById(selectedQuestionId)
      .subscribe(result => {
        if (result.highlightedResponseId != null) {
          const responsesByQuestion: any = result.responses; // Gets the objects in 'responses' array in the questions JSON
          // tslint:disable-next-line: forin
          for (const r in responsesByQuestion) {
            const responseId: any = responsesByQuestion[r].id; // Sets the response ID
            if (responseId === result.highlightedResponseId) {
              // Checks to see if response ID is equal to the highlighted response ID
              this.highlightedResponse = responsesByQuestion[r];
            }
          }
        } else {
          console.log('No highlighted response');
        }
      });

    // Retrieving responses based on the selected question
    this.questionService
      .getQuestionById(selectedQuestionId)
      .subscribe(result => {
        this.questionResponses = result.responses;
      });
  }
}
