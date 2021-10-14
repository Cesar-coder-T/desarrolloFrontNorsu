import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
<<<<<<< HEAD
import {CaptchaModule} from 'primeng/captcha';
import {DividerModule} from 'primeng/divider';
=======
import { InputNumberModule } from 'primeng/inputnumber';
>>>>>>> 32f38fbcff0c3924c475da1c07519e87da0971b0

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
<<<<<<< HEAD
    CaptchaModule,
    DividerModule
=======
    InputNumberModule
>>>>>>> 32f38fbcff0c3924c475da1c07519e87da0971b0
  ],
  exports: [
    InputTextModule,
    PasswordModule,
    ButtonModule,
<<<<<<< HEAD
    CaptchaModule,
    DividerModule
=======
    InputNumberModule
>>>>>>> 32f38fbcff0c3924c475da1c07519e87da0971b0
  ]
})
export class PrimengModule { }
