import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditQuestionViewComponent } from './edit-question-view.component';

describe('EditQuestionViewComponent', () => {
  let component: EditQuestionViewComponent;
  let fixture: ComponentFixture<EditQuestionViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditQuestionViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditQuestionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
