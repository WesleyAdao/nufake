import { Injectable } from '@angular/core';
import { Login } from '../../interfaces/login/Login.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  setUserSession(session:Login ) {
    localStorage.setItem('session', JSON.stringify(session))
  }

  getUserSession(){
    const user = localStorage.getItem('session')

    if (user) {
      return JSON.parse(user)
    }

    return null
  }
}
