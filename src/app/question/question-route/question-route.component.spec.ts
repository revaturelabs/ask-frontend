import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionRouteComponent } from './question-route.component';

describe('QuestionRouteComponent', () => {
  let component: QuestionRouteComponent;
  let fixture: ComponentFixture<QuestionRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
