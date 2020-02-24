import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../services/auth/auth.guard';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [{
    path: 'expert', children: [
        { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
    ]
}];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule],
})
export class ExpertsRoutingModule { }