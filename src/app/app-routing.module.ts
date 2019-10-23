import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import {EnterResponseComponent} from './enter-response/enter-response.component';
import {SelfTagsComponent} from './self-tags/self-tags.component';
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
  path: "tags",
  component: SelfTagsComponent,
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
