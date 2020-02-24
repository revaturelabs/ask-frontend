import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewQuestionComponent } from '../question/view-question/view-question.component';
import { AuthGuard } from '../services/auth/auth.guard';
import { FilteredQuestionListComponent } from '../question/filtered-question-list/filtered-question-list.component';
import { QuestionRouteComponent } from "../question/question-route/question-route.component";

const routes: Routes = [{
    path: 'question', children: [
        { path: 'view', component: ViewQuestionComponent, canActivate: [AuthGuard] },
        { path: 'all', component: FilteredQuestionListComponent, canActivate: [AuthGuard] },
        { path: ':id', component: QuestionRouteComponent, canActivate: [AuthGuard]},
    ]
}];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule],
})
export class QuestionRoutingModule { }