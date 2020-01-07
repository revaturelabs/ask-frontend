import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
<<<<<<< HEAD
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { RouterTestingModule } from '@angular/router/testing';
=======
import { AuthService } from 'src/app/services/auth/auth.service';
>>>>>>> 5a35f0dcf27c68a203250883caf8bd0875956f03

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let authServiceStub: Partial<AuthService>;
  authServiceStub = {
    isLoggedIn: false
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
<<<<<<< HEAD
      imports: [ RouterTestingModule ],
      providers: [ {provide: AuthService, useValue: authServiceStub } ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
=======
      imports: [AuthService]
>>>>>>> 5a35f0dcf27c68a203250883caf8bd0875956f03
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
