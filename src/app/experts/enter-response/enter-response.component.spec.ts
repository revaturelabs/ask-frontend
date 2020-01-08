import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterResponseComponent } from './enter-response.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LMarkdownEditorModule } from 'ngx-markdown-editor';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { OverlayModule } from '@angular/cdk/overlay';
import { Response } from '../../models/Response';

describe('EnterResponseComponent', () => {
  let component: EnterResponseComponent;
  let fixture: ComponentFixture<EnterResponseComponent>;
  let newResponse: any[] = [];
  // tslint:disable-next-line: prefer-const
  let responseServiceSpy: { addResponse(bodySpy: any): jasmine.Spy };
  let questionServiceSpy: { getQuestionId(): jasmine.Spy };
  let authServiceSpy: { account: jasmine.Spy };

  let responseDummyData: Response = {
    user: null,
    id: 0,
    responderId: 0,
    questionId: 0,
    body: '',
    creationDate: null,
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EnterResponseComponent],
      imports: [LMarkdownEditorModule, FormsModule, HttpClientTestingModule, RouterTestingModule, OverlayModule],
      providers: [MatSnackBar],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    questionServiceSpy = jasmine.createSpyObj('QuestionService', ['getQuestionId']);
    responseServiceSpy = jasmine.createSpyObj('ResponseService', ['saveResponse']);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a response', () => {
    spyOn(component, 'addResponse');
    const bodySpy = 'Spy adding a responce';
    component.addResponse(bodySpy);
    newResponse[0] = questionServiceSpy.getQuestionId();
    expect(newResponse.length).toBeGreaterThan(0);
  });

  it('should update a response', () => {
    spyOn(component, 'updateResponse');
    component.response.body = 'This is a test';
    component.updateResponse();
    expect(component.response).not.toEqual(responseDummyData);
  });
});
