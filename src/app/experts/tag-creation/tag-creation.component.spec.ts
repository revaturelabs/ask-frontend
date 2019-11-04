import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagCreationComponent } from './tag-creation.component';

describe('TagCreationComponent', () => {
  let component: TagCreationComponent;
  let fixture: ComponentFixture<TagCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
