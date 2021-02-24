import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Login } from '../../interfaces/login/Login.interface';
import { Sessao } from '../../interfaces/Sessao.interface';
import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NufakeLoginService {
  API_URL = environment.API_URL

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  doLogin({ usuario, senha }: Login):Observable<Sessao> {
    return this.http.post<Sessao>(`${this.API_URL}/login`, { usuario, senha })
      .pipe(
        tap(
          response => {
            this.authService.setUser(response.usuario);
            this.authService.setToken(response.token);
          }
        )
      )

    return throwError("Usuário ou senha incorretos")
  }
}
