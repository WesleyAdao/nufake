import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UsuarioDTO } from '../../interfaces/usuario/UsuarioDTO.interface';
=======
import { AuthService } from '../../services/auth/auth.service';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UsuarioDTO } from '../../interfaces/usuario/UsuarioDTO.interface';
import { Cadastro } from '../../interfaces/usuario/cadastro.interface';
>>>>>>> ebd4850c21663c835d18cefd863e76f69ba7139f

@Injectable({
  providedIn: 'root'
})
export class NufakeHomeService {
  API_URL = environment.API_URL

  constructor(
    private http: HttpClient,
  ) { }

<<<<<<< HEAD
  criarConta({ cpf, login, nome, senha }: UsuarioDTO) {
    return this.http.post(`${this.API_URL}/usuarios`, { cpf, login, nome, senha })
  }
=======
  validaSenha({ inputSenha, confirmaSenha, senha}: Cadastro) {

    if (inputSenha == confirmaSenha) {

      //senha = inputSenha
      console.log(inputSenha)

    } else {

      //alert("Confirmar senha é diferente de senha")
      console.log("Confirmar senha é diferente de senha")
      
    }

  }

  validaTamanhoSenha({ inputSenha }: Cadastro) {

    if (inputSenha.length < 8) {

      //alert("A senha deve ter no mínimo 8 caracteres")
      console.log("A senha deve ter no mínimo 8 caracteres")

    }

  }

/*
  criarConta({ cpf, login, nome, senha }: UsuarioDTO) {
    return this.http.post(`${this.API_URL}/usuarios`, { cpf, login, nome, senha })
  }*/

>>>>>>> ebd4850c21663c835d18cefd863e76f69ba7139f
}