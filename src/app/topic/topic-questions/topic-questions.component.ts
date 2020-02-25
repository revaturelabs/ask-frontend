import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/Question';
import { QuestionService } from '../../services/question.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-topic-questions',
  templateUrl: './topic-questions.component.html',
  styleUrls: ['./topic-questions.component.css']
})
export class TopicQuestionsComponent implements OnInit {
  questions: Question[];
  // questionsTagArr: String[];
  questionsTagArr: Question[];
 
  constructor(
    private questionService: QuestionService,
    private route : ActivatedRoute,
    private router: Router) { }

  getQuestions = () => {
    this.questionsTagArr=[];
    
    this.questionService.getQuestions().subscribe(response=> {
      this.questions=response;
      this.questions.map( question => {
        let idTag =+ this.route.snapshot.paramMap.get('id');       
        for ( let tagKeyValPair of question.associatedTags ) {         
          if (idTag == tagKeyValPair.id) {
            this.questionsTagArr.push(question);
          }          
        } 
      });    
    });    
  }

  ngOnInit() {
    this.getQuestions();
  }

  goToQuestion = questionId => {
    this.router.navigate([`/question/${questionId}`]);
  } 
}
