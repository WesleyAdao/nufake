import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nufake-recoverypass',
  templateUrl: './nufake-recoverypass.component.html',
  styleUrls: ['./nufake-recoverypass.component.scss']
})
export class NufakeRecoverypassComponent implements OnInit {

  formRecovery: FormGroup;

  cpfValido: any;



  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.criarForm();
  }

  criarForm() {
    this.formRecovery = this.formBuilder.group({
      cpf: [],
      senha: [],
      senhaRepete: []
    })
  }



  //MOCK atraves do loginService pelo objeto {data}
  enviarForm() {
    const usuario = localStorage.getItem('data');
    let login;

    if (usuario) {
      login = JSON.parse(usuario);
    }

    const form = this.formRecovery.getRawValue();
      if (form.cpf === login.cpf && form.senha === form.senhaRepete) {
      this.router.navigate(['dashboard'])

    } else {
      alert('Cpf ou senha incorretos');
    }


  }

}
