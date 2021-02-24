import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NufakeDashComponent } from './shared/components/nufake-dash/nufake-dash.component';
import { NufakeErrorComponent } from './shared/components/nufake-error/nufake-error.component';
import { NufakeHomeComponent } from './shared/components/nufake-home/nufake-home.component';
import { NufakeLoginComponent } from './shared/components/nufake-login/nufake-login.component';
import { NufakeRecoverypassComponent } from './shared/components/nufake-recoverypass/nufake-recoverypass.component';

const routes: Routes = [
  {
    path: 'home', component: NufakeHomeComponent
  },
  {
    path: 'login', component: NufakeLoginComponent
  },
  {
    path: 'dashboard', component: NufakeDashComponent
  },
  {
    path: 'recovery', component: NufakeRecoverypassComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },{
    path: '**', component: NufakeErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
