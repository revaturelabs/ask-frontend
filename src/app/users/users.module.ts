import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { MaterialImportModule } from '../../material-import/material-import.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AssociateProfileComponent } from './associateprofile/associateprofile.component';
import { ExpertProfileComponent } from './expert-profile/expert-profile.component';

@NgModule({
  declarations: [AskQuestionComponent, AssociateProfileComponent, ExpertProfileComponent],
  imports: [
    CommonModule,
    MaterialImportModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class UsersModule {}
