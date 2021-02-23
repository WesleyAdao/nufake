import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NufakeHomeComponent } from './shared/components/nufake-home/nufake-home.component';
import { NufakeLoginComponent } from './shared/components/nufake-login/nufake-login.component';
import { NufakeRecoverypassComponent } from './shared/components/nufake-recoverypass/nufake-recoverypass.component';
import { NufakeErrorComponent } from './shared/components/nufake-error/nufake-error.component';
import { NufakeDashComponent } from './shared/components/nufake-dash/nufake-dash.component';

@NgModule({
  declarations: [
    AppComponent,
    NufakeHomeComponent,
    NufakeLoginComponent,
    NufakeRecoverypassComponent,
    NufakeErrorComponent,
    NufakeDashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
