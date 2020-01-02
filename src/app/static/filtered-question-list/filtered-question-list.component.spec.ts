import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionService } from 'src/app/services/question.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FilteredQuestionListComponent } from './filtered-question-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OverlayModule } from '@angular/cdk/overlay';
import { Observable } from 'rxjs';
import { Question } from 'src/app/models/Question';

describe('FilteredQuestionListComponent', () => {

  let component: FilteredQuestionListComponent;
  let fixture: ComponentFixture<FilteredQuestionListComponent>;

  class QuestionServiceStub {
    questionId: 0;
    getQuestions(): Observable<Question[]> {
      return new Observable<Question[]>();
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FilteredQuestionListComponent],
      imports: [ HttpClientTestingModule, OverlayModule ],
      providers: [ {provide: QuestionService, useClass: QuestionServiceStub }, MatSnackBar ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteredQuestionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
