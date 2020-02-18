import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewQuestionComponent } from './preview-question.component';
import { QuestionService } from 'src/app/services/question.service';
import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectorRef, NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from 'src/app/models/Question';
import { Observable } from 'rxjs';
import { By } from '@angular/platform-browser';
import { Tag } from 'src/app/models/Tag';
import { User } from 'src/app/models/User';
import { SkilltagPipe } from '../../shared/skilltag.pipe';

const MockUser: User = {
  id: 1,
  username: 'string',
  isExpert: false,
  expertTags: [],
  questions: [],
  responses: []
};
const MockTags: Tag[] = [
  {
    id: 1,
    name: 'Mock Tag 1'
  },
  {
    id: 2,
    name: 'Mock Tag 2'
  },
  {
    id: 3,
    name: 'Mock Tag 3'
  }
];
const MockQuestion: Question = {
  id: 201,
  username: null,
  tags: ['Java' , 'Angular'],
  userId: 203,
  user: MockUser,
  head: 'Mock Header',
  body: 'Mock Body',
  creationDate: '2015-12-17',
  associatedTags: MockTags,
  responses: [],
  highlightedResponseId: null,
  images: null
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
      declarations: [ PreviewQuestionComponent, SkilltagPipe ],
      providers: [
        {provide: QuestionService, useClass: MockQuestionService},
        {provide: Router, useValue: routerSpy}
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewQuestionComponent);
    component = fixture.componentInstance;
    component.question = MockQuestion;
    component.tag = MockTag;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test click for viewQuestion', () => {
    const el = fixture.debugElement.query(By.css('mat-card-title'));
    el.triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(component.viewQuestion).toBeDefined();
  });

  it('should test resizedPage() with a small number of question.associatedTags, hiddenTags should finish with length 0', () => {
    component.resizedPage();
    fixture.detectChanges();
    expect(component.hiddenTags.length).toBe(0);
  });

  it('should test resizedPage() with a large number of question.associatedTags, hiddenTags should finish with length > 0', () => {
    for (let i = 0; i < 20; i++) {
      component.question.associatedTags.push({id: (i + 4), name: 'Mock Tag ' + (i + 4)});
    }
    component.resizedPage();
    fixture.detectChanges();
    expect(component.hiddenTags.length).toBeGreaterThan(0);
  });

});
