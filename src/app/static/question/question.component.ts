import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/app/models/Question';
import { HttpClient } from '@angular/common/http';
import { QuestionService } from '../../services/question.service';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * @author: Alec Thavychith and Justin Yang
 *
 * Displaying the full details of a specific question
 * that corresponds to the selected question from the
 * preview page
 *
 */

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  /** The purpose of the QuestionComponent is to display the complete
   * details of the question that was selected on the Preview-QuestionComponent.
   * As a result, it is not only tightly coupled to the Preview-QuestionComponent,
   * but also to the ResponseComponent, since the ResponseComponent 
   * displays the full details of the responses to the QuestionComponent,
   * as well as to the View-QuestionComponent, as it is within
   * the View-QuestionComponent where the QuestionComponent is
   * actually instantiated.
   */
  @Input() question: Question;

  constructor(
    private httpClient: HttpClient,
    private questionService: QuestionService,
    private domSanitizer: DomSanitizer,
  ) {}

  image: any;

  // retrieves a corresponding image from the server
  getPhotos() {
    let questionId: number = this.questionService.getQuestionId();
    let observable = this.questionService.getQuestionImages(questionId);
    observable.subscribe(
      (result: any) => {
        let imageURL = 'data:image/jpeg;base64,' + result[0].image;
        this.image = this.domSanitizer.bypassSecurityTrustUrl(imageURL);
      },
      err => {
        console.log('Invalid');
      },
    );
  }

  ngOnInit() {
    this.getPhotos();
  }
}
