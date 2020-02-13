import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificTagInfoComponent } from './specific-tag-info.component';

describe('SpecificTagInfoComponent', () => {
  let component: SpecificTagInfoComponent;
  let fixture: ComponentFixture<SpecificTagInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificTagInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificTagInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
