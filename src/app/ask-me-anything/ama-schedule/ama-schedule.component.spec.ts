import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmaScheduleComponent } from './ama-schedule.component';

describe('AmaScheduleComponent', () => {
  let component: AmaScheduleComponent;
  let fixture: ComponentFixture<AmaScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmaScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmaScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
