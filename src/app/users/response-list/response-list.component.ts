import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/app/models/Question';
import { QuestionService } from 'src/app/services/question.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-response-list',
  templateUrl: './response-list.component.html',
  styleUrls: ['./response-list.component.css']
})
export class ResponseListComponent implements OnInit {

  questionList : Question[];

  @Input()
  userId: number;


  constructor(private questionService : QuestionService, private authService : AuthService) { }

  ngOnInit() {
    this.questionService.getExpertQuestionsByResponse(this.userId).subscribe((data)=>{
      console.log(data);
      this.questionList = data;
    });
  }

}
