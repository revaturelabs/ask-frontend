import { Component, OnInit, Output } from '@angular/core';
import { ResponseService } from '../../services/response.service';
import { QuestionService } from '../../services/question.service';
import { Response } from 'src/app/models/Response';
import { Question } from 'src/app/models/Question';
import { AuthService } from 'src/app/services/auth/auth.service';

/**
 * @author: Alec Thavychith
 *
 * Displaying the full question body based on the selected question with
 * with its responses
 *
 */

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
  @Output() selectedQuestion: Question;
  responses: Response[];
  highlightedResponse: any;
  questionResponses: any;
  totalMsgCount: number = 0; // count the messages of the responses. initialize to 0;


  constructor(
    private questionService: QuestionService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.refreshPage();
  }

  refreshPage() {
    // Getting the selected question ID from the QuestionService that was set in the PreviewQuestionComponent
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
        this.totalMsgCount = result.responses.length;
      });
  }
}
