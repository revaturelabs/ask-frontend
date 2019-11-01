import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Account } from 'src/app/models/account';
import { HttpClient } from '@angular/common/http';

const url = "http://ec2-54-80-244-190.compute-1.amazonaws.com:1337/users";


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  private form: FormGroup;
  private formSubmitAttempt: boolean;
  private account: any;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private http: HttpClient,
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
    fetch(url, {method: "GET"})
    .then((response)=>{
      // console.log(response.json());
      return response.json();
    }).catch(console.log)
    // if(this.account.expert == false) {
    //   this.userLogin();
    // }
    // else if (this.account.expert == true) {
    //   this.expertLogin();
    // }
    this.formSubmitAttempt = true;
  }

  userLogin() {
    const loginUrl = `${url}/${this.account}`
    this.authService.userLogin(this.form.value);
    console.log(this.http.get(loginUrl));
    let observable = this.http.get(loginUrl);
    observable.subscribe((result=>{
      this.account = result;
      console.log(result)
      console.log(this.account.expert)
    }))
  }

  expertLogin() {
    this.authService.expertLogin(this.form.value);
  }
}

