import { Injectable } from '@angular/core';
import { Usuario } from '../../interfaces/usuario/Usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;
  usuario: Usuario

  constructor() { }

  setUser(usuario: Usuario) {
    this.usuario = usuario
    localStorage.setItem('usuario', JSON.stringify(usuario))
  }

  getUser() {

    if (this.usuario) {
      return this.usuario
    }

    const user = localStorage.getItem('usuario')


    if (user) {
      this.usuario = JSON.parse(user)
      return this.usuario
    }

    return null
  }

  getToken() {
    if (this.token) {
      return this.token
    }

    const userToken = localStorage.getItem('token')

    if (userToken) {
      this.token = userToken
      return this.token
    }

    return null
  }

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('token', token)
  }

  setData(cpf:string) {
    localStorage.setItem('cpf', cpf)
  }

  isLoggedIn(): boolean {

     if (this.getUser() && this.getToken()) {
       return true
     }

    console.log(this.getToken())
    return false
  }
}
