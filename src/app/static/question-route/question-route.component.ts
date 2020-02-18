import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { switchMap } from 'rxjs/operators';
import { Question } from 'src/app/models/Question';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-question-route',
  templateUrl: './question-route.component.html',
  styleUrls: ['./question-route.component.css']
})
export class QuestionRouteComponent implements OnInit {

  question$: Observable<Question>;

  constructor(private route: ActivatedRoute, private questionService: QuestionService) { }
  
  ngOnInit() {
    this.question$ = this.route.paramMap.pipe(switchMap((params: ParamMap) => this.questionService.getQuestionById(params.get('id'))));
  }

}
