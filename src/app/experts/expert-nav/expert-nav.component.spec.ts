import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertNavComponent } from './expert-nav.component';

describe('ExpertNavComponent', () => {
  let component: ExpertNavComponent;
  let fixture: ComponentFixture<ExpertNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExpertNavComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
