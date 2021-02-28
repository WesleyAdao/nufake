import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

import { CardListComponent } from './components/card-list/card-list.component';
import { DefaultCardComponent } from './components/default-card/default-card.component';
import { NufakeDashComponent } from './components/nufake-dash/nufake-dash.component';
import { NufakeErrorComponent } from './components/nufake-error/nufake-error.component';
import { NufakeHomeComponent } from './components/nufake-home/nufake-home.component';
import { NufakeLoginComponent } from './components/nufake-login/nufake-login.component';
import { NufakeRecoverypassComponent } from './components/nufake-recoverypass/nufake-recoverypass.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatCardModule } from '@angular/material/card';





@NgModule({
  declarations: [
    NufakeHomeComponent,
    NufakeLoginComponent,
    NufakeRecoverypassComponent,
    NufakeErrorComponent,
    NufakeDashComponent,
    CardListComponent,
    DefaultCardComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatCardModule,


  ],
  exports: [
    NufakeHomeComponent,
    NufakeLoginComponent,
    NufakeRecoverypassComponent,
    NufakeErrorComponent,
    NufakeDashComponent,
    DefaultCardComponent,
    CardListComponent,
    SidebarComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class SharedModule { }
