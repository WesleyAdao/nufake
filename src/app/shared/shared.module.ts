import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

import { CardListComponent } from './components/card-list/card-list.component';
import { CardComponent } from './components/card/card.component';
import { DefaultCardComponent } from './components/default-card/default-card.component';
import { NufakeDashComponent } from './components/nufake-dash/nufake-dash.component';
import { NufakeErrorComponent } from './components/nufake-error/nufake-error.component';
import { NufakeHomeComponent } from './components/nufake-home/nufake-home.component';
import { NufakeLoginComponent } from './components/nufake-login/nufake-login.component';
import { NufakeRecoverypassComponent } from './components/nufake-recoverypass/nufake-recoverypass.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


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
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatListModule,
  ],
  exports:[
    NufakeHomeComponent,
    NufakeLoginComponent,
    NufakeRecoverypassComponent,
    NufakeErrorComponent,
    NufakeDashComponent,
    DefaultCardComponent,
    CardListComponent,
    CardComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
