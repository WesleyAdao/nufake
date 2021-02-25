import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NufakeDashComponent } from './shared/components/nufake-dash/nufake-dash.component';
import { NufakeErrorComponent } from './shared/components/nufake-error/nufake-error.component';
import { NufakeHomeComponent } from './shared/components/nufake-home/nufake-home.component';
import { NufakeLoginComponent } from './shared/components/nufake-login/nufake-login.component';
import { NufakeRecoverypassComponent } from './shared/components/nufake-recoverypass/nufake-recoverypass.component';
import { IsNotLoggedGuard } from './shared/guards/is-not-logged.guard';
import { LoggedInGuard } from './shared/guards/logged-in.guard';

const routes: Routes = [
  {
    path: 'home', component: NufakeHomeComponent
  },
  {
    path: 'login', component: NufakeLoginComponent,
    canActivate: [IsNotLoggedGuard]
  },
  {
    path: 'dashboard', component: NufakeDashComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'recovery', component: NufakeRecoverypassComponent,
    canActivate: [IsNotLoggedGuard]
  },
  {
    path: 'error', component: NufakeErrorComponent,
    canActivate: [IsNotLoggedGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }, {
    path: '**',
    component: NufakeErrorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
