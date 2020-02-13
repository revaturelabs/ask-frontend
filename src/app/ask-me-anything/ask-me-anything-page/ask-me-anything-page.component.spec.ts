import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskMeAnythingPageComponent } from './ask-me-anything-page.component';

describe('AskMeAnythingPageComponent', () => {
  let component: AskMeAnythingPageComponent;
  let fixture: ComponentFixture<AskMeAnythingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskMeAnythingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskMeAnythingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
