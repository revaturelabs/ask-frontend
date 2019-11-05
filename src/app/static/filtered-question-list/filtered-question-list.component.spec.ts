import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredQuestionListComponent } from './filtered-question-list.component';

describe('FilteredQuestionListComponent', () => {
  let component: FilteredQuestionListComponent;
  let fixture: ComponentFixture<FilteredQuestionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FilteredQuestionListComponent],
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
