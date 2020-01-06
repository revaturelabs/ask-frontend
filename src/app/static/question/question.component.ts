import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/app/models/Question';
import { HttpClient } from '@angular/common/http';
import { QuestionService } from '../../services/question.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

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

  images: SafeUrl[];
  imageSize = false;

  getPhotos() {
    const questionId: number = this.questionService.getQuestionId();
    const observable = this.questionService.getQuestionImages(questionId);
    observable.subscribe(
      result => {
        if (result) {
          for (const img of result) {
            const imageURL = 'data:image/jpeg;base64,' + img.image;
            this.images.push(this.domSanitizer.bypassSecurityTrustUrl(imageURL));
          }
        } else {
          this.images = [];
        }
      },
      err => {
        console.log('Invalid');
      },
    );
  }

  ngOnInit() {
    this.images = [];
    this.getPhotos();
  }
}
