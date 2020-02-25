import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../services/auth/auth.guard';
import { AskQuestionComponent } from '../users/ask-question/ask-question.component';

const routes: Routes = [{
    path: 'user', children: [
        { path: 'ask', component: AskQuestionComponent, canActivate: [AuthGuard]  },
    ]
}];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule],
})
export class UsersRoutingModule { }