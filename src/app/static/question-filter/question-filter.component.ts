import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-question-filter',
  templateUrl: './question-filter.component.html',
  styleUrls: ['./question-filter.component.css']
})
export class QuestionFilterComponent implements OnInit {
  
  question: string ="";
  response: any;
  constructor(private http: HttpClient) {

   }

  ngOnInit() {
    this.http.get('http://ec2-54-80-244-190.compute-1.amazonaws.com:1337/questions')
  }

  search() {
    this.http.get('http://ec2-54-80-244-190.compute-1.amazonaws.com:1337/questions' + this.question)
    .subscribe((response)=> {
      this.response = response;
      console.log(this.response);
    })
  }

}
