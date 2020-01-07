import { FilteredQuestionListComponent } from './filtered-question-list.component';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { Question } from 'src/app/models/Question';
import { QuestionService } from 'src/app/services/question.service';
import { MatSnackBar, MatIconModule, MatButtonModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { FormsModule } from '@angular/forms';
import { compileNgModule } from '@angular/compiler';
import { asyncData } from 'src/test';
describe('FilteredQuestionListComponent', () => {
  let component: FilteredQuestionListComponent;
  let fixture: ComponentFixture<FilteredQuestionListComponent>;
  let httpClientSpy: { get: jasmine.Spy };
  let questionServiceSpy: { getQuestions: jasmine.Spy };
  let questionService: QuestionService;

  let questionServiceDummyData: Question[] = [
    {
      id: 1,
      userId: 5,
      username: 'Billy Carter',
      highlightedResponseId: null,
      head: 'Java Collections',
      body: 'What are Collections in Java?',
      creationDate: '2015-12-17T05:00:00.000+0000',
      associatedTags: [
        {
          id: 3,
          name: 'Java'
        }
      ],
      responses: [
        {
          user: {
            id: 3,
            username: 'Zach Marshello',
            expertTags: [
              {
                id: 15,
                name: 'Architecture'
              },
              {
                id: 3,
                name: 'Java'
              },
              {
                id: 31,
                name: 'CSS'
              },
              {
                id: 1,
                name: 'JavaScript'
              }
            ],
            isExpert: true
          },
          id: 2,
          responderId: 4,
          body: 'Collections are any objects that implement the Interface Collection.',
          creationDate: '2019-10-31T04:00:00.000+0000',
          questionId: 1
        },
        {
          user: {
            id: 3,
            username: 'Zach Marshello',
            expertTags: [
              {
                id: 15,
                name: 'Architecture'
              },
              {
                id: 3,
                name: 'Java'
              },
              {
                id: 31,
                name: 'CSS'
              },
              {
                id: 1,
                name: 'JavaScript'
              }
            ],
            isExpert: true
          },
          id: 3,
          responderId: 6,
          body: 'Collections is a utility class in Java to work with objects that implement the Interface Collection.',
          creationDate: '2019-10-30T04:00:00.000+0000',
          questionId: 1
        }
      ],
      images: []
    },
    {
      id: 3,
      userId: 7,
      username: 'Billy Carter',
      highlightedResponseId: null,
      head: 'Why use Java',
      body: 'I am wondering what are some advantages of using Java over other programming languages?',
      creationDate: '2015-12-17T05:00:00.000+0000',
      associatedTags: [
        {
          id: 3,
          name: 'Java'
        }
      ],
      responses: [],
      images: []
    },
    {
      id: 5,
      userId: 5,
      username: 'Billy Carter',
      highlightedResponseId: null,
      head: 'Read / convert an InputStream to a String',
      body: 'If you have a java.io.InputStream object, how should you process that object and produce a String?',
      creationDate: '2015-12-17T05:00:00.000+0000',
      associatedTags: [
        {
          id: 3,
          name: 'Java'
        }
      ],
      responses: [],
      images: []
    },
    {
      id: 6,
      userId: 1,
      username: 'Adam Shipe',
      highlightedResponseId: null,
      head: 'HashMap vs. HashTable',
      body: 'I am not sure whether I should use HashMap or HashTable?',
      creationDate: '2015-12-17T05:00:00.000+0000',
      associatedTags: [
        {
          id: 3,
          name: 'Java'
        },
        {
          id: 13,
          name: 'Data Structures'
        }
      ],
      responses: [],
      images: []
    }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FilteredQuestionListComponent],
      imports: [HttpClientTestingModule, OverlayModule, FormsModule, MatIconModule, MatButtonModule],
      providers: [{ provide: questionService, useValue: questionServiceSpy }, MatSnackBar],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    questionServiceSpy = jasmine.createSpyObj('QuestionService', ['getQuestions']);
    questionService = new QuestionService(httpClientSpy as any);

    fixture = TestBed.createComponent(FilteredQuestionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('setFilteredStatusAndRefreshQuestions should not been called when passed in true to refreshed questions', () => {
    spyOn(component, 'refreshQuestions');
    component.setFilteredStatusAndRefreshQuestions(true);
    expect(component.refreshQuestions).not.toHaveBeenCalled();
  });

  it('setFilteredStatusAndRefreshQuestions should be called when passed in true to refreshed questions', () => {
    spyOn(component, 'refreshQuestions');
    component.setFilteredStatusAndRefreshQuestions(false);
    expect(component.refreshQuestions).toHaveBeenCalled();
  });

  it('should populate the question list with filtered question data', () => {
    let question: Question[] = [];
    httpClientSpy.get.and.returnValue(asyncData(questionServiceDummyData));
    component.setQuestionsListWithFilteredUri('Java');
    component.getFilteredQuestions().subscribe(
      data => {
        question = data;
        expect(question.length).toBeGreaterThan(0);
      }
    );
  });

  it('should refresh questions', () => {
    component.hasBeenFiltered = true;
    spyOn(component, 'getFilteredQuestions');
    component.refreshQuestions();
    expect(component.getFilteredQuestions).toHaveBeenCalled();
  });


});
