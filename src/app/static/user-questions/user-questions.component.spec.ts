import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserQuestionsComponent } from './user-questions.component';

describe('UserQuestionsComponent', () => {
  let component: UserQuestionsComponent;
  let fixture: ComponentFixture<UserQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
