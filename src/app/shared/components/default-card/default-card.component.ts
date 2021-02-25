import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-card',
  templateUrl: './default-card.component.html',
  styleUrls: ['./default-card.component.scss']
})
export class DefaultCardComponent implements OnInit {

  iconeCard = 'default-header-image';
  titulo = '';
  subtitulo = '';
  labelValor = 'Transações:';
  valor1 = '10.000,00';
  valor2 = '2.120,21';


  constructor() { }

  ngOnInit(): void {
  }

}
