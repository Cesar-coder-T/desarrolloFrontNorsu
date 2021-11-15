import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /**
   * Form responsible for storing the user's login information
   */
  loginForm!: FormGroup;

  validador!: number;

  constructor(
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.validador = 0;
    this.loginForm = new FormGroup({
      electronicMail: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  onLogin() {
    if (this.loginForm.value['electronicMail'] == "administrador@correo.com") {
      if (this.loginForm.value['password'] == "administrador12345") {
        this.router.navigate(['administrador/gestionar-cursos']);
      } else {
        this.snackBar.open('Advertencia: ', 'Credenciales no válidas', {
          duration: 2000,
        })
      }

    } else {
      if (this.loginForm.value['electronicMail'] == "colaborador@correo.com") {
        if (this.loginForm.value['password'] == "colaborador12345") {
          this.router.navigate(['colaborador/mis-cursos']);
        } else {
          this.snackBar.open('Advertencia: ', 'Credenciales no válidas', {
            duration: 2000,
          })
        }

      } else {
        this.snackBar.open('Advertencia: ', 'Credenciales no válidas', {
          duration: 2000,
        })
      }
    }

  }

}
