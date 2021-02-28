import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { pipe } from 'rxjs';
import { take } from 'rxjs/operators';
import { Dashboard } from '../../interfaces/Dashboard.interface';
import { PlanoConta } from '../../interfaces/lancamento/planos-conta/PlanoConta.interface';
import { CardListComponent } from '../card-list/card-list.component';
import { DefaultCardComponent } from '../default-card/default-card.component';
import { NufakeDashService } from './nufake-dash.service';


@Component({
  selector: 'app-nufake-dash',
  templateUrl: './nufake-dash.component.html',
  styleUrls: ['./nufake-dash.component.scss']
})
export class NufakeDashComponent implements OnInit {
  arrowRight = "seta-acessar.svg"
  dashboard: Dashboard

  cardList: CardListComponent;
  defaultCard: DefaultCardComponent;

  constructor(
    private nufakeDash: NufakeDashService
  ) { }

  ngOnInit(): void {

    this.nufakeDash.dashboard()
      .pipe(
        take(1)
      ).subscribe(
        response => this.dashboard = response
      )

  }

  //  **** LISTA PLANOS ****
  // listaPlanos() {
  //   planoConta: PlanoConta[]
  //   this.nufakeDash.getPlanosConta()
  //     .pipe(
  //       take(1)
  //     ).subscribe(
  //       response => this.planoConta = response
  //     )
  // }

  //  **** CRIA UM DEPOSITO ****
  //   Esses valores são pegos dos campos de depósito
  // criaPlanos(descricao: string, login: string, tipoMovimento: string) {
  //   this.nufakeDash.planosConta({ descricao, login, tipoMovimento })
  //     .pipe(
  //       take(1)
  //     ).subscribe(
  //       response => this.onCreatePlansSuccess()
  //       error => this.onErrorOnDashboard()
  //     )
  // }

  //  **** FAZ TRANSFERÊNCIAS ****
  // criaLancamento() {

  //   Esses valores são pegos dos campos da transferência
  //   this.nufakeDash.lancamentos({
  //     conta: 827,
  //     data: "2021-02-27",
  //     descricao: "PAGAMENTO CONTA DE INTERNET",
  //     login: "mandre",
  //     planoConta: 1610,
  //     valor: 1500
  //   })
  //     .pipe(
  //       take(1)
  //     ).subscribe(
  //       response => this.onCreateLancamentos(),
  //       error => this.onErrorOnDashboard()
  //     )
  // }

  // onCreatePlansSuccess() {
  //   console.log("Criação de plano bem sucedida")
  // }

  // onCreateLancamentos() {
  //   console.log("Lançamento realizado com sucesso")
  // }

  // onErrorOnDashboard() {
  //   console.log("OOps!, algo de errado aconteceu")
  // }
}
