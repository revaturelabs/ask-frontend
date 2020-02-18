import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/Question';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-topic-questions',
  templateUrl: './topic-questions.component.html',
  styleUrls: ['./topic-questions.component.css']
})
export class TopicQuestionsComponent implements OnInit {
  questions: Question[];
  constructor(private questionService: QuestionService,) { }

  ngOnInit() {
    this.questionService.getQuestions().subscribe(response=> {
      this.questions=response;
    });
  }
  
// getAllQuestions(); 
// getAllQuestions(){
//   this.questionService.getQuestions().subscribe(response=> {
//     this.questions=response
//   });
// }

}
