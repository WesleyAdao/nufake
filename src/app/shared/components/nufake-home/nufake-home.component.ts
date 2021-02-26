import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NufakeHomeService } from './nufake-home.service';
import { throwError } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-nufake-home',
  templateUrl: './nufake-home.component.html',
  styleUrls: ['./nufake-home.component.scss']
})
export class NufakeHomeComponent implements OnInit {

  constructor(
    private nuFakeHomeService: NufakeHomeService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  /*
  *** método para chamar serviço que faz cadastro ***
  ChamaMetodo( ){
  this.nuFakeHomeService.criarConta(Objeto que contém { cpf, login, nome, senha })
  .pipe(
    take(1)
  ).subscribe(
    response => this.SignInSuccess(),
    error => this.SignInError()
    )
  }
  SignInSuccess(){
    this.router.navigate(['login'])
  }

  SignInError() {
    alert("Ocorreu um erro ao se cadastrar, por favor tente novamente")
    throwError("Ocorreu um erro durante o cadastro, por favor tente novamente")
  }

  */

}
