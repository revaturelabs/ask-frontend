import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicWebinarsComponent } from './topic-webinars.component';

describe('TopicWebinarsComponent', () => {
  let component: TopicWebinarsComponent;
  let fixture: ComponentFixture<TopicWebinarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicWebinarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicWebinarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
