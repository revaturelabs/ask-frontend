import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ResponseService } from '../../services/response.service';
import { QuestionService } from '../../services/question.service';
import { Response } from 'src/app/models/Response';
import { Question } from 'src/app/models/Question';
import { AuthService } from '../../services/auth/auth.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

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
  highlightedResponse$: Observable<Response>;
  //Whether the currently logged in user owns the selected question
  userOwnsQuestion: boolean;

  @Input()
  responseMode = true;

  constructor(
    private questionService: QuestionService,
    private responseService: ResponseService,
    public authService: AuthService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.userOwnsQuestion = this.selectedQuestion.user.id === this.authService.account.id;
    this.refreshQuestion();
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  refreshQuestion(): void {
    // let id =+ this.route.snapshot.paramMap.get('id');
    // this.questionService.getQuestionById(id).subscribe((data)=>{
     this.questionService.getQuestionById(this.selectedQuestion.id).subscribe((data)=>{
      this.selectedQuestion = data;
      //TODO: This line should be replaced by some more sensible sequential request mechanic
      // maybe piping an observable off questionService
      if(data.highlightedResponseId) {
        this.highlightedResponse$ = this.responseService.getResponseById(data.highlightedResponseId);
      }
      this.userOwnsQuestion = this.authService.account.id === data.user.id;
    });

  }

}
