import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UsuarioDTO } from '../../interfaces/usuario/UsuarioDTO.interface';

@Injectable({
  providedIn: 'root'
})
export class NufakeHomeService {
  API_URL = environment.API_URL

  constructor(
    private http: HttpClient,
  ) { }

  criarConta({ cpf, login, nome, senha }: UsuarioDTO) {
    return this.http.post(`${this.API_URL}/usuarios`, { cpf, login, nome, senha })
  }
}
