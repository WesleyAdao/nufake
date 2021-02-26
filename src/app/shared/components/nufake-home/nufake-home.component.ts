import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NufakeHomeService } from './nufake-home.service';
import { throwError } from 'rxjs';
import { take } from 'rxjs/operators';
<<<<<<< HEAD
=======
import { NgForm } from '@angular/forms';
import { UsuarioDTO } from '../../interfaces/usuario/UsuarioDTO.interface';
import { Cadastro } from '../../interfaces/usuario/cadastro.interface';
>>>>>>> ebd4850c21663c835d18cefd863e76f69ba7139f

@Component({
  selector: 'app-nufake-home',
  templateUrl: './nufake-home.component.html',
  styleUrls: ['./nufake-home.component.scss']
})
export class NufakeHomeComponent {

  cpf: number;
  login: string;
  nome: string;
  inputSenha: string;
  confirmaSenha: string;
  senha: string;
  userCad: UsuarioDTO;
  cad: Cadastro;


  /*

  validaSenha() {


  }
*/
  constructor(
    private nuFakeHomeService: NufakeHomeService,
    private router: Router
  ) { }

  onSubmit(formHome: NgForm) {

    this.validaConta()
    //,this.cadastro()

  }

  validaConta () {

    this.cad = {

      cpf: this.cpf,
      login: this.login,
      nome: this.nome,
      inputSenha: this.inputSenha,
      confirmaSenha: this.confirmaSenha,
      senha: this.senha

    }
  }
<<<<<<< HEAD
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
=======
/*
  cadastro() {
>>>>>>> ebd4850c21663c835d18cefd863e76f69ba7139f

    this.userCad = {

      cpf: this.cpf,
      login: this.login,
      nome: this.nome,
      senha: this.senha

    }

    this.nuFakeHomeService.criarConta(this.userCad)
      .pipe(
        take(1)
      )
      .subscribe(
        response => this.SignInSuccess(),
        error => this.SignInError()
      )

  }

  SignInSuccess() {

    this.router.navigate(['login'])

  }

  SignInError() {

    alert("Ocorreu um erro ao se cadastrar, por favor tente novamente")
    throwError("Ocorreu um erro durante o cadastro, por favor tente novamente")

  }
*/
}
