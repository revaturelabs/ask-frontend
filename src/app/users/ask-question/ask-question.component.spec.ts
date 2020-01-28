import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskQuestionComponent } from './ask-question.component';
import { MatSnackBar, MatIconModule, MatButtonModule, MatInputModule, MatAutocompleteModule,
         MatFormFieldModule, MatSelectModule, MatCardModule, MatChipsModule } from '@angular/material';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OverlayModule } from '@angular/cdk/overlay';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LMarkdownEditorModule } from 'ngx-markdown-editor';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AskQuestionComponent', () => {
  let component: AskQuestionComponent;
  let fixture: ComponentFixture<AskQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AskQuestionComponent],
      imports: [HttpClientTestingModule, OverlayModule, FormsModule, MatIconModule, MatButtonModule, ReactiveFormsModule,
        LMarkdownEditorModule, MatInputModule, MatAutocompleteModule, MatFormFieldModule, MatSelectModule,
        MatCardModule, MatChipsModule, RouterTestingModule, BrowserAnimationsModule],
      providers: [MatSnackBar],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
