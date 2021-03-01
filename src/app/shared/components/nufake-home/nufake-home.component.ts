import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NufakeHomeService } from './nufake-home.service';
import { throwError } from 'rxjs';
import { take } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { UsuarioDTO } from '../../interfaces/usuario/UsuarioDTO.interface';

@Component({
  selector: 'app-nufake-home',
  templateUrl: './nufake-home.component.html',
  styleUrls: ['./nufake-home.component.scss']
})
export class NufakeHomeComponent {

  cpf: number;
  login: string;
  nome: string;
  senha: string;
  confirmaSenha: string;
  userCad: UsuarioDTO;

  constructor(
    private nuFakeHomeService: NufakeHomeService,
    private router: Router
  ) { }

  onSubmit(formHome: NgForm) {

    this.cadastro()

  }

  cadastro() {

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
}
