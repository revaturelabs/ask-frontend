import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/app/models/Question';
import { QuestionService } from '../../services/question.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  @Input() question: Question;

  constructor(
    private questionService: QuestionService,
    private domSanitizer: DomSanitizer,
    private authService: AuthService,
    private router: Router,
  ) {}
  
  images: SafeUrl[];
  imageSize = false;
  editable: boolean;

  getPhotos() {
    const questionId: number = this.question.id;
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
      },
    );
  }

  ngOnInit() {
    this.images = [];
    this.getPhotos();
    this.editable = (this.authService.account.id === this.question.user.id);
  }

  edit(): void {
    this.router.navigate([`/edit-question/${this.question.id}`]);
  }
}
