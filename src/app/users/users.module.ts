import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNavComponent } from './user-nav/user-nav.component';
import { UserPageComponent } from './user-page/user-page.component';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { MaterialImportModule } from '../../material-import/material-import.module';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: 'ask-question', component: AskQuestionComponent}
];

@NgModule({
  declarations: [
    UserNavComponent,
    UserPageComponent,
    AskQuestionComponent,
  ],
  imports: [
    CommonModule,
    MaterialImportModule,
  ]
})
export class UsersModule { }
export const routingComponents = [AskQuestionComponent]
