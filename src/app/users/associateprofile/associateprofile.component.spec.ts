import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateprofileComponent } from './associateprofile.component';

describe('AssociateprofileComponent', () => {
  let component: AssociateprofileComponent;
  let fixture: ComponentFixture<AssociateprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociateprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociateprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
