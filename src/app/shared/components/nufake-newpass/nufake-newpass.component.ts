import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../../interfaces/login/Login.interface';
import { NufakeRecoverypassService } from '../nufake-recoverypass/nufake-recoverypass.service';

@Component({
  selector: 'app-nufake-newpass',
  templateUrl: './nufake-newpass.component.html',
  styleUrls: ['./nufake-newpass.component.scss']
})
export class NufakeNewpassComponent {
  imageLogo = "gama-academy-logo-horizontal-verde-branco1 1.svg"
  arrowRight = "seta-acessar.svg"
  usuario: string
  senha: string

  constructor(
    private nufakeRecoverypassService: NufakeRecoverypassService,
    private router: Router
  ) { }


  onSubmit(form: NgForm) {
    this.changetoNewPassword({ usuario: this.usuario, senha: this.senha })
  }

  changetoNewPassword({ usuario, senha }: Login) {
    this.nufakeRecoverypassService.alterarSenha({ usuario, senha })
  }
}
