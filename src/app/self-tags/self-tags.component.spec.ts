import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfTagsComponent } from './self-tags.component';

describe('SelfTagsComponent', () => {
  let component: SelfTagsComponent;
  let fixture: ComponentFixture<SelfTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
