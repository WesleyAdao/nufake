import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Login } from '../../interfaces/login/Login.interface';
import { NovaSenha } from '../../interfaces/login/NovaSenha.interface';

interface NewPassword {
  email: string;
  login: string;
}

@Injectable({
  providedIn: 'root'
})
export class NufakeRecoverypassService {

  newPassword: NewPassword;
  login: Login;
  temporaryPassword:string;

  API_URL = environment.API_URL

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }


  solicitarNovaSenha({ login, email }:NovaSenha): Observable<string> {

    this.newPassword = {
      email,
      login,
    }

    return this.http.post<string>(`${this.API_URL}/nova-senha`, this.newPassword)
  }

  alterarSenha({ usuario, senha }: Login) {
    this.login = {
      usuario,
      senha,
    }

    const httpParams = new HttpParams({
      fromString: `senhaTemporaria=${this.temporaryPassword}`
    })
    const url = `${this.API_URL}/altera-senha`

    return this.http.post(url, this.login, { params: httpParams })
      .subscribe(
        response => this.recoverySuccess(),
        error => this.recoveryError()
      )
  }

  recoverySuccess() {
    this.router.navigate(['login'])
  }

  recoveryError() {
    alert("Ocorreu um erro durante a recuperação de senha, por favor tente novamente");
  }

  storeTemporaryPassword(senhaTemporaria: string):void{
    this.temporaryPassword = senhaTemporaria
  }
}
