import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertProfileComponent } from './expert-profile.component';

describe('ExpertProfileComponent', () => {
  let component: ExpertProfileComponent;
  let fixture: ComponentFixture<ExpertProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
