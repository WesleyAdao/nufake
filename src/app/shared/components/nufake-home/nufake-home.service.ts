import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth/auth.service';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UsuarioDTO } from '../../interfaces/usuario/UsuarioDTO.interface';
import { AbstractControl  } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class NufakeHomeService {
  API_URL = environment.API_URL

  constructor(
    private http: HttpClient,
  ) { }
/*


  validarSenha() {

    const form = this.formHome.getRawValue();

    if (form.senha == form.confirmaSenha) {

      alert('Senhas correta');

    }else{

      alert('Senhas não batem');

    }

  }

  const digits = cpf.match(/\d/g).map((value) => parseInt(value, 10));

  if (new Set(digits).size === 1) {
    return false;
  }

  let d1 = 0;

  for (let i = 10; i >= 2; i--) {
    d1 += i * digits[10 - i];
  }

  let d2 = 0;

  for (let i = 11; i >= 2; i--) {
    d2 += i * digits[11 - i];
  }

  d1 = d1 % 11;
  d2 = d2 % 11;
  d1 = d1 < 2 ? 0 : 11 - d1;
  d2 = d2 < 2 ? 0 : 11 - d2;

  return d1 % 11 === digits[9] && d2 % 11 === digits[10];
}

export default { validate };

*/

  criarConta({ cpf, login, nome, senha }: UsuarioDTO) {
    return this.http.post(`${this.API_URL}/usuarios`, { cpf, login, nome, senha })
  }


}
