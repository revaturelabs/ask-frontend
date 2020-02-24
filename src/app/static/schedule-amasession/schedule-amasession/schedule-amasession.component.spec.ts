import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleAmasessionComponent } from './schedule-amasession.component';

describe('ScheduleAmasessionComponent', () => {
  let component: ScheduleAmasessionComponent;
  let fixture: ComponentFixture<ScheduleAmasessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleAmasessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleAmasessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
