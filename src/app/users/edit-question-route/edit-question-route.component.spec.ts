import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditQuestionRouteComponent } from './edit-question-route.component';

describe('EditQuestionRouteComponent', () => {
  let component: EditQuestionRouteComponent;
  let fixture: ComponentFixture<EditQuestionRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditQuestionRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditQuestionRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
