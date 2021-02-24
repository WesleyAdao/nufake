import { Injectable } from '@angular/core';
import { Login } from '../../interfaces/login/Login.interface';
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

<<<<<<< HEAD

    if (this.login) {
      return this.login
=======
    if (this.usuario) {
      return this.usuario
>>>>>>> 55afd290f0ff968458d5c2ea668a26572ae8d5c7
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

  setData(data: any) {
    localStorage.setItem('data', JSON.stringify(data))
  }

  isLoggedIn(): boolean {

     if (this.getUser() && this.getToken()) {
       return true
     }

    console.log(this.getToken())
    return false
  }
}
