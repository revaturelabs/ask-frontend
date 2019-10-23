import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { QuestionListComponent } from './question-list/question-list.component';



@NgModule({
  declarations: [FooterComponent, LoginPageComponent, QuestionListComponent],
  imports: [
    CommonModule
  ]
})
export class StaticModule { }
