import { Component, OnInit } from '@angular/core';
import { NufakeLoginService } from './nufake-login.service';
import { take } from 'rxjs/operators';
import { Login } from '../../interfaces/login/Login.interface';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nufake-login',
  templateUrl: './nufake-login.component.html',
  styleUrls: ['./nufake-login.component.scss']
})
export class NufakeLoginComponent implements OnInit {
  usuario: string;
  senha: string;
  userLogin: Login;
  imageLogo = "gama-academy-logo-horizontal-verde-branco1 1.svg"
  arrowRight = "arrow-right.svg"

  constructor(
    private nufakeLoginService: NufakeLoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

<<<<<<< HEAD
  onSubmit(form:NgForm) {
  
=======
  onSubmit(form: NgForm) {

>>>>>>> 55afd290f0ff968458d5c2ea668a26572ae8d5c7
    this.login()
  }

  login() {

    this.userLogin = {
      senha: this.senha,
      usuario: this.usuario
    }

    this.nufakeLoginService.doLogin(this.userLogin)
      .pipe(
        take(1)
      ).subscribe(
        response => this.loginSuccess(),
        error => {
          console.log("Ocorreu um erro ao logar")
        }
      )
  }
  loginSuccess() {
    this.router.navigate(['dashboard'])
  }
}
