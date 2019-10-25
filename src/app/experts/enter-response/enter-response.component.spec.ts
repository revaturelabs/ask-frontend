import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterResponseComponent } from './enter-response.component';

describe('EnterResponseComponent', () => {
  let component: EnterResponseComponent;
  let fixture: ComponentFixture<EnterResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EnterResponseComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
