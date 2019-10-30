import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

const loginUrl = "";


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {

  form: FormGroup;
  
  constructor(
    private router: Router,
    private fb: FormBuilder,
    ) {}

  hide = true;

  onSubmit() {
    if(this.form.valid) {
      fetch(loginUrl, {method: "POST", body: JSON.stringify(this.form.value)})
      .then((response) => {
        // this.authService.login(this.form.value);
        return response.json();
      }).catch(console.log);
    }
  }

  ngOnInit() {
    this.form = this.fb.group({
      id:['']
    });
  }

  userLogin() {
    this.router.navigate(['/user-page']);
  }

  expertLogin() {
    this.router.navigate(['/expert-page']);
  }
}

