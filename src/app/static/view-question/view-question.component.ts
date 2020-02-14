import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
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
export class ViewQuestionComponent implements OnInit, OnChanges {
  /** For now, ViewQuestionComponent is tightly coupled with the QuestionService
   * and only displays the question whose id is saved in that service.
   * This should be a reusable component for displaying arbitrary questions, but
   * refactoring will take some doing and this works.  So selectedQuestion is
   * appropriate -- it will only ever be the question selected by the user elsewhere
   * on the site.
   */
  @Input() selectedQuestion: Question;
  responses: Response[];

  constructor(
    private questionService: QuestionService,
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.ngOnChanges(null);
  }

  ngOnChanges(changes: SimpleChanges) {
    
  }

}
