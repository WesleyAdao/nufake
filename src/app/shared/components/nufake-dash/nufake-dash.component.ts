import { Component, OnInit } from '@angular/core';

import { DefaultCardComponent } from '../default-card/default-card.component';

@Component({
  selector: 'app-nufake-dash',
  templateUrl: './nufake-dash.component.html',
  styleUrls: ['./nufake-dash.component.scss']
})
export class NufakeDashComponent implements OnInit {


  defaultCard: DefaultCardComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
