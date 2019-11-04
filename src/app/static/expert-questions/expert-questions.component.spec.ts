import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertQuestionsComponent } from './expert-questions.component';

describe('ExpertQuestionsComponent', () => {
  let component: ExpertQuestionsComponent;
  let fixture: ComponentFixture<ExpertQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
