import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicAMAComponent } from './topic-ama.component';

describe('TopicAMAComponent', () => {
  let component: TopicAMAComponent;
  let fixture: ComponentFixture<TopicAMAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicAMAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicAMAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
