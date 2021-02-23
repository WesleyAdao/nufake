import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NufakeHomeComponent } from './nufake-home/nufake-home.component';
import { NufakeLoginComponent } from './nufake-login/nufake-login.component';
import { NufakeRecoverypassComponent } from './nufake-recoverypass/nufake-recoverypass.component';
import { NufakeErrorComponent } from './nufake-error/nufake-error.component';
import { NufakeDashComponent } from './nufake-dash/nufake-dash.component';

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
