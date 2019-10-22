import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import {EnterResponseComponent} from './enter-response/enter-response.component';
import {ExpertPageComponent} from './expert-page/expert-page.component';
import {PostsComponent} from './posts/posts.component';




const routes: Routes = [

  {
  path: "ask",
  component: AskQuestionComponent,
},
{
  path: "response",
  component: EnterResponseComponent,
},
{
  path: "expert",
  component: ExpertPageComponent,
},
{
  path: "posts",
  component: PostsComponent,
},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
