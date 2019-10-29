import { Component, OnInit } from "@angular/core";
import { QUESTIONS } from '../../mock-questions';

@Component({
  selector: "app-question",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.css"]
})
export class QuestionComponent implements OnInit {
  //Passing mock dependencies in
  question = QUESTIONS[1];

  constructor() {}

  ngOnInit() {}
}
