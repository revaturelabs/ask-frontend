import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Account } from 'src/app/models/account';

const url = "http://ec2-54-80-244-190.compute-1.amazonaws.com:1337/users";

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
    private authService: AuthService
    ) {}

    hide = true;

  ngOnInit() {
//remove comment-out when password field is added
    this.form = this.fb.group({
      id: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string) { 
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    console.log(this.form.value)
    this.userLogin();
    fetch(url, {method: "POST", body: JSON.stringify(this.form.value)})
    // .then((response)=>{
    //   console.log(response)
    //   return response.json();
    // }).catch(console.log)
    // if(this.account.expert == false) {
    //   this.userLogin();
    // }
    // else if (this.account.expert == true) {
    //   this.expertLogin();
    // }
    this.formSubmitAttempt = true;
  }

  login: Object = {
    
  }

  onSubmit2 = function(id) {
    console.log(id)

  }

  userLogin() {
    this.authService.userLogin(this.form.value);
  }

  expertLogin() {
    this.authService.expertLogin(this.form.value);
  }
}

