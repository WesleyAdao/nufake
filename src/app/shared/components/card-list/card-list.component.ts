import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  iconeCard = 'default-header-image';
  titulo = '';
  subtitulo = '';
  labelValor = 'Transações:';
  valor1 = '10.000,00';
  valor2 = '2.120,21';
  itens = [
    {
      id: 1,
      titulo: 'Compra no débito',
      beneficiario: 'GamaAcademy',
      valor: 'R$ 298,55',
      data: 'Dia 4 de Jan.',
      iconeUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',

    },

  ];


  constructor() { }

  ngOnInit(): void {
  }

}
