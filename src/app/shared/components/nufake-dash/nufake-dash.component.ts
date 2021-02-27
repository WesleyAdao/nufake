import { Component, OnInit } from '@angular/core';
import { Dashboard } from '../../interfaces/Dashboard.interface';

import { CardListComponent } from '../card-list/card-list.component';
import { DefaultCardComponent } from '../default-card/default-card.component';
import { NufakeDashService } from './nufake-dash.service';

@Component({
  selector: 'app-nufake-dash',
  templateUrl: './nufake-dash.component.html',
  styleUrls: ['./nufake-dash.component.scss']
})
export class NufakeDashComponent implements OnInit {

  cardList: CardListComponent;
  defaultCard: DefaultCardComponent;

  dashboard: Dashboard

  constructor(
    private nufakeDash: NufakeDashService
  ) { }

  ngOnInit(): void {

    this.nufakeDash.dashboard()
      .subscribe(
        response => this.dashboard = response
      )
  }


}
