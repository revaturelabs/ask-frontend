import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { MaterialImportModule } from '../../material-import/material-import.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [AskQuestionComponent, ProfileComponent],
  imports: [
    CommonModule,
    MaterialImportModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class UsersModule {}
