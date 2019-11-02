import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionFilterComponent } from './question-filter.component';

describe('QuestionFilterComponent', () => {
  let component: QuestionFilterComponent;
  let fixture: ComponentFixture<QuestionFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
