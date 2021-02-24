import { Injectable } from '@angular/core';
import { Login } from '../../interfaces/login/Login.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;
  login: Login

  constructor() { }

  setUser(login: Login) {
    this.login = login
    localStorage.setItem('login', JSON.stringify(login))
  }

  getUser() {


    if (this.login) {
      return this.login
    }

    const user = localStorage.getItem('login')


    if (user) {
      this.login = JSON.parse(user)
      return this.login
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
