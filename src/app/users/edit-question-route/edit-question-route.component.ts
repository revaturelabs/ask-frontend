import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from 'src/app/models/Question';
import { QuestionService } from 'src/app/services/question.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-edit-question-route',
  templateUrl: './edit-question-route.component.html',
  styleUrls: ['./edit-question-route.component.css']
})
export class EditQuestionRouteComponent implements OnInit {

  question$: Observable<Question>;

  constructor(private route: ActivatedRoute, private questionService: QuestionService) { }
  
  ngOnInit() {
    this.question$ = this.route.paramMap.pipe(switchMap((params: ParamMap) => this.questionService.getQuestionById(params.get('id'))));
  }
}
