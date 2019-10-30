import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskQuestionFormComponent } from './ask-question-form.component';

describe('AskQuestionFormComponent', () => {
  let component: AskQuestionFormComponent;
  let fixture: ComponentFixture<AskQuestionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskQuestionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskQuestionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
