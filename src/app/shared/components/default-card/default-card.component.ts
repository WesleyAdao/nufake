import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-card',
  templateUrl: './default-card.component.html',
  styleUrls: ['./default-card.component.scss']
})
export class DefaultCardComponent implements OnInit {

  iconeCardConta = 'default-header-conta';
  titulo = 'Conta';
  subtitulo = 'Saldo Disponivel';
  labelValor = 'Transações:';
  valor1 = '10.000,00';
  valor2 = '2.120,21';

  iconeCardCredito = 'default-header-credito';
  tituloCredito = 'Conta Credito';
  subtituloCredito = 'Fatura atual';
  labelValorCredito = 'Limite disponivel';
  valor3 = '120,88';
  valor4 = '9.120,88';

  iconeCardLancamentos = 'default-header-lancamento';
  tituloLancamentos = 'Ultimos lançamentos';
  subtituloLancamentos = 'Compra no débito';
  labelValorLancamentos = 'GamaAcademy';
  valor5 = '120,88';

  constructor() { }

  ngOnInit(): void {
  }

}
