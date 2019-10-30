import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;
  private formSubmitAttempt: boolean;
  account: Account;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService) {}

    hide = true;

  ngOnInit() {
//remove comment-out when password field is added
    this.form = this.fb.group({
      id: ['', Validators.required]
    });
  }

  userLogin() {
    this.authService.userLogin(this.form.value);
    console.log(this.form.value)
  }

  expertLogin() {
    this.authService.expertLogin(this.form.value);
    console.log(this.form.value)
  }
}

