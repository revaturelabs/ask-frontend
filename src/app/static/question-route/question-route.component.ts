import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { switchMap } from 'rxjs/operators';
import { Question } from 'src/app/models/Question';

@Component({
  selector: 'app-question-route',
  templateUrl: './question-route.component.html',
  styleUrls: ['./question-route.component.css']
})
export class QuestionRouteComponent implements OnInit {

  question: Question;
  routeNumber: number;

  constructor(private route: ActivatedRoute, private questionService: QuestionService) { }
  
  ngOnInit() {
    this.route.paramMap.pipe(switchMap((params: ParamMap) => this.questionService.getQuestionById(params.get('id')))).subscribe((data)=>{
      this.question = data;
    });
  }

}
