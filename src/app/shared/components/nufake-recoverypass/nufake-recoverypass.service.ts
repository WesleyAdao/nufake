import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from '../../interfaces/login/Login.interface';

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

  API_URL = environment.API_URL

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }


  solicitarNovaSenha(): Observable<string> {

    this.newPassword = {
      email: "email@dominio.com",
      login: "mandre"
    }

    return this.http.post<string>(`${this.API_URL}/nova-senha`, this.newPassword)
  }

  alterarSenha(senhaTemporaria: string) {
    this.login = {
      senha: "senha123",
      usuario: "mandre"
    }

    const httpParams = new HttpParams({
      fromString: `senhaTemporaria=${senhaTemporaria}`
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
}
