import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NufakeHomeComponent } from './components/nufake-home/nufake-home.component';
import { NufakeLoginComponent } from './components/nufake-login/nufake-login.component';
import { NufakeRecoverypassComponent } from './components/nufake-recoverypass/nufake-recoverypass.component';
import { NufakeErrorComponent } from './components/nufake-error/nufake-error.component';
import { NufakeDashComponent } from './components/nufake-dash/nufake-dash.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NufakeHomeComponent,
    NufakeLoginComponent,
    NufakeRecoverypassComponent,
    NufakeErrorComponent,
    NufakeDashComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    NufakeHomeComponent,
    NufakeLoginComponent,
    NufakeRecoverypassComponent,
    NufakeErrorComponent,
    NufakeDashComponent,
  ]
})
export class SharedModule { }
