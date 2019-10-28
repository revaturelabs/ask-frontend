import { Component, OnInit } from '@angular/core';
import { Question } from '../../models/Question';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css'],
})
export class QuestionListComponent implements OnInit {
  questions: Question[];

  constructor() {}

  ngOnInit() {
    // Mock questions
    this.questions = [
      {
        id: 11,
        username: 'RJones',
        title:
          'How to trigger an html button and its onclick function with a hardware keyboard key?',
        description:
          'How do I add a keyboard key like the spacebar as an event listener or something similar, so that when I press the spacebar (and not in a text box), it presses the button and triggers the function? A simple vanilla javascript answer would be preferable, since I dont get jQuery. Would it be better to simply add script that triggers myFunction with the spacebar rather than going through triggering the button? And if so, how do I program that?',
        tags: 'Javascript',
        date: '10/22/2019',
      },
      {
        id: 12,
        username: 'Jimmy',
        title: 'How to duplicate elements of an array in Node.js?',
        description:
          'So Im trying to duplicate the array elements, for example: var array = ["chicken","nugget","good"]; into: var array2 = ["chicken","chicken","nugget","nugget","good","good"]; How to done with this?',
        tags: 'Javascript Front-end HTML',
        date: '10/22/2019',
      },
      {
        id: 13,
        username: 'AaronHawthorne',
        title: 'ngFor with index as value in attribute',
        description:
          'I have a simple ngFor loop which also keeps track of the current index. I want to store that index value in an attribute so I can print it. But I cant figure out how this works.',
        tags: 'Angular Front-end',
        date: '10/21/2019',
      },
      {
        id: 14,
        username: 'DanPierre',
        title: 'Laravel MySql reverse the pagination collection data',
        description:
          'I am building a chat application using Laravel 5.8 and would like to know how to reverse the order of LengthAwarePaginator data. I have tried using $messages->reverse() and that works but it removes the pagination meta data from collection. So would like to know if there is any option to do it from query side or reverse the order and keep the pagination meta data.',
        tags: 'PHP SQL',
        date: '10/19/2019',
      },
      {
        id: 15,
        username: 'AlexisF',
        title: 'How can I pass a parameter to JavaFXDialog?',
        description:
          'I have this code in JavaFX that open a JFXDialog for me, but I need to pass a parameter to the Controller for it properly work, does anyone knows a method that let me pass it?',
        tags: 'PHP SQL',
        date: '10/19/2019',
      },
    ];
  }
}
