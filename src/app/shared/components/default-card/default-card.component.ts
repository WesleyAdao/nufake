import { Component, Input, OnInit } from '@angular/core';
import { Dashboard } from '../../interfaces/Dashboard.interface';

@Component({
  selector: 'app-default-card',
  templateUrl: './default-card.component.html',
  styleUrls: ['./default-card.component.scss']
})
export class DefaultCardComponent implements OnInit {

  @Input() dashboard: Dashboard;
  

  constructor() { }

  ngOnInit(): void {
    console.log(this.dashboard)
  }

}
