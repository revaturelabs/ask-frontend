import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/Question';
import { QuestionService } from '../../services/question.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-topic-questions',
  templateUrl: './topic-questions.component.html',
  styleUrls: ['./topic-questions.component.css']
})
export class TopicQuestionsComponent implements OnInit {
  questions: Question[];
  questionsTagArr: String[];
 
  constructor(private questionService: QuestionService,private route : ActivatedRoute) { }

  getQuestions = () => {
    this.questionsTagArr=[];
    
    this.questionService.getQuestions().subscribe(response=> {
      this.questions=response;
      this.questions.map( question => {
        let idTag =+ this.route.snapshot.paramMap.get('id');
        // console.log(question.associatedTags);
       
        for ( let tagKeyValPair of question.associatedTags ) {
          console.log(idTag,tagKeyValPair.id,idTag == tagKeyValPair.id);
          // console.log(tagKeyValPair.id);
          // console.log(idTag == tagKeyValPair.id);
          if (idTag == tagKeyValPair.id) {
            console.log(question.head);
            this.questionsTagArr.push(question.head);
          }
          
        }
  
       
  
      });
      // this.getTagKeyValPair();
      // console.log(this.questionsTagArr)
    });
    
  }

  getTagKeyValPair = () => {
//  console.log(this.questions);
  }

  ngOnInit() {
    this.getQuestions();
  }
  
// getAllQuestions(); 
// getAllQuestions(){
//   this.questionService.getQuestions().subscribe(response=> {
//     this.questions=response
//   });
// }

}
