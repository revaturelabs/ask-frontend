import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewQuestionComponent } from '../question/view-question/view-question.component';
import { AuthGuard } from '../services/auth/auth.guard';
import { FilteredQuestionListComponent } from '../question/filtered-question-list/filtered-question-list.component';
import { ExpertQuestionsComponent } from '../question/expert-questions/expert-questions.component';
import { UserQuestionsComponent } from '../question/user-questions/user-questions.component';

const routes: Routes = [{
    path: 'questions', children: [
        { path: 'view', component: ViewQuestionComponent, canActivate: [AuthGuard] },
        { path: '', component: FilteredQuestionListComponent, canActivate: [AuthGuard] },
        { path: 'expert', component: ExpertQuestionsComponent, canActivate: [AuthGuard] },
        { path: 'user', component: UserQuestionsComponent, canActivate: [AuthGuard] },
    ]
}];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule],
})
export class QuestionRoutingModule { }