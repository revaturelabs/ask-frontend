import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestTagsComponent } from './interest-tags.component';

describe('InterestTagsComponent', () => {
  let component: InterestTagsComponent;
  let fixture: ComponentFixture<InterestTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
