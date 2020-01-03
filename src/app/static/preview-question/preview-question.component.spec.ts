import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewQuestionComponent } from './preview-question.component';
import { QuestionService } from 'src/app/services/question.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from 'src/app/models/Question';
import { Response } from 'src/app/models/Response';
import { Observable } from 'rxjs';
import { By } from '@angular/platform-browser';
import { Tag } from 'src/app/models/Tag';
import { User } from 'src/app/models/User';

// const MockResponse: Response = {
//   user: 'Mock',
//   id: 4,
//   responderId: 1,
//   questionId: 2,
//   body: 'Mock Body',
//   creationDate: 'Mock Date'
// };
const MockUser: User = {
  id: 1,
  username: 'string',
  isExpert: false,
  expertTags: [],
  questions: [],
  responses: []
};
const MockQuestion: Question = {
  id: 201,
  username: null,
  tags: ['Java' , 'Angular'],
  userId: 203,
  head: 'Mock Header',
  body: 'Mock Body',
  creationDate: 'Mock Date',
  associatedTags: [],
  responses: [],
  highlightedResponseId: null
};
const MockTag: Tag = {
  id: 1,
  name: 'Mock Tag'
};
class MockQuestionService {
  id = 1;
  getQuestions(): Observable<Question[]> {
    return new Observable<Question[]>();
  }
  setQuestionId(questionId) {
    this.id = questionId;
  }
  getQuestionId() {
    return this.id;
  }
  getQuestionById(questionId): Observable<Question> {
    return new Observable<Question>();
  }
  getQuestionImages(questionId): Observable<Question> {
    return new Observable<Question>();
  }
  saveQuestion(question: Question): Observable<Question> {
    return new Observable<Question>();
  }
  updateQuestion(question: Question): Observable<Question> {
    return new Observable<Question>();
  }
  highlightResponse(question: Question): Observable<Question> {
    return new Observable<Question>();
  }
  removePost(question: Question | number): Observable<Question> {
    return new Observable<Question>();
  }
}
const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

describe('PreviewQuestionComponent', () => {
  let component: PreviewQuestionComponent;
  let fixture: ComponentFixture<PreviewQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewQuestionComponent ],
      providers: [
        {provide: QuestionService, useClass: MockQuestionService},
        {provide: Router, useValue: routerSpy}
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewQuestionComponent);
    component = fixture.componentInstance;
    // const questionDe  = fixture.debugElement.query(By.css('.question'));
    // const questionEl = questionDe.nativeElement;
    component.question = MockQuestion;
    component.tag = MockTag;
    fixture.detectChanges();
  });

  it('should create', () => {
    console.log(component);
    expect(component).toBeTruthy();
  });

});
