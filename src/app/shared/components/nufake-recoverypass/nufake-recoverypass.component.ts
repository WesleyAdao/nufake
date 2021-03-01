import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { NovaSenha } from '../../interfaces/login/NovaSenha.interface';
import { NufakeRecoverypassService } from './nufake-recoverypass.service';

@Component({
  selector: 'app-nufake-recoverypass',
  templateUrl: './nufake-recoverypass.component.html',
  styleUrls: ['./nufake-recoverypass.component.scss']
})
export class NufakeRecoverypassComponent implements OnInit {
  login: string;
  email: string;

  imageLogo = "gama-academy-logo-horizontal-verde-branco1 1.svg"
  arrowRight = "seta-acessar.svg"

  constructor(
    private nufakeRecoverypassService: NufakeRecoverypassService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.callAPI({ login: this.login, email: this.email })
  }


  callAPI({ login, email }: NovaSenha) {
    this.nufakeRecoverypassService.solicitarNovaSenha({ login, email })
      .pipe(
        take(1)
      ).subscribe(
        response => this.sendToNewPasswordRequest(response),
        error => this.sendToNewPasswordRequest(error.error.text)
      )
  }

  sendToNewPasswordRequest(senhaTemporaria: string) {
    this.nufakeRecoverypassService.storeTemporaryPassword(senhaTemporaria)
    this.router.navigate(['changepass'])
  }

}
