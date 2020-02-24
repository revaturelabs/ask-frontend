import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmaEventComponent } from './ama-event.component';

describe('AmaEventComponent', () => {
  let component: AmaEventComponent;
  let fixture: ComponentFixture<AmaEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmaEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmaEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
