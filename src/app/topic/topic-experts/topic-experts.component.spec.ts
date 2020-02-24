import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicExpertsComponent } from './topic-experts.component';

describe('TopicExpertsComponent', () => {
  let component: TopicExpertsComponent;
  let fixture: ComponentFixture<TopicExpertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicExpertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicExpertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
