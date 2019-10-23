import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatMenuModule, MatButtonModule } from '@angular/material';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), MatMenuModule, MatButtonModule],
  exports: [RouterModule, MatMenuModule, MatButtonModule]
})
export class AppRoutingModule { }
