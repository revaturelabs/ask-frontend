import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/app/models/Question';
import { HttpClient } from '@angular/common/http';
import { QuestionService } from '../../services/question.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  @Input() question: Question;

  constructor(
    private httpClient: HttpClient,
    private questionService: QuestionService,
    private domSanitizer: DomSanitizer,
    ) {}

  image: any;

  getPhotos() {
    let questionId: number = this.questionService.getQuestionId();
    let observable = this.questionService.getQuestionImages(questionId);
    observable.subscribe((result: any) => {
      let imageURL = 'data:image/jpeg;base64,' + result[0].image;
      this.image = this.domSanitizer.bypassSecurityTrustUrl(imageURL);
    },
      (err) => {
        console.log('Invalid');
      }
    );
  }

  ngOnInit() {
    this.getPhotos();
  }
}
