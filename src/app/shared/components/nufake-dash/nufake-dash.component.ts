import { Component, OnInit } from '@angular/core';

import { CardListComponent } from '../card-list/card-list.component';
import { DefaultCardComponent } from '../default-card/default-card.component';

@Component({
  selector: 'app-nufake-dash',
  templateUrl: './nufake-dash.component.html',
  styleUrls: ['./nufake-dash.component.scss']
})
export class NufakeDashComponent implements OnInit {

  cardList: CardListComponent;
  defaultCard: DefaultCardComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
