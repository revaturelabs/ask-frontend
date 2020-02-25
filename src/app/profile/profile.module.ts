import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './profile/profile.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { ResponseListComponent } from './response-list/response-list.component';

import { QuestionModule } from '../question/question.module';
import { SharedModule } from '../shared/shared.module';
import { UsersModule } from '../users/users.module';
import { ExpertsModule } from '../experts/experts.module';
import { ProfileRoutingModule } from "./profile-routing.module";

@NgModule({
  declarations: [ProfileComponent, ProfileUserComponent, ResponseListComponent],
  imports: [
    CommonModule,
    QuestionModule,
    UsersModule,
    ExpertsModule,
    SharedModule,
    ProfileRoutingModule
  ],
  exports: [
    ProfileComponent, 
    ProfileUserComponent, 
    ResponseListComponent
  ]
})
export class ProfileModule { }
