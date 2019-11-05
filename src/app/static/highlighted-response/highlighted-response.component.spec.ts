import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightedResponseComponent } from './highlighted-response.component';

describe('HighlightedResponseComponent', () => {
  let component: HighlightedResponseComponent;
  let fixture: ComponentFixture<HighlightedResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighlightedResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightedResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
