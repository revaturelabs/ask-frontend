import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/Question';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-response-list',
  templateUrl: './response-list.component.html',
  styleUrls: ['./response-list.component.css']
})
export class ResponseListComponent implements OnInit {

  questionList : Question[];

  constructor(private questionService : QuestionService) { }

  ngOnInit() {
    //hardcoded the 1 for now because I'm told there's something wacky with the questions system right now.
    this.questionService.getExpertQuestionsByResponse(3).subscribe((data)=>{
      console.log(data);
      this.questionList = data;
    });
  }

}
