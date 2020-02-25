import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/auth/auth.guard';

import { LoginPageComponent } from './static/login-page/login-page.component';
import { AskMeAnythingPageComponent } from './ama/ask-me-anything/ask-me-anything-page/ask-me-anything-page.component';
import { PageNotFoundComponent } from './static/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'chat', component: AskMeAnythingPageComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
