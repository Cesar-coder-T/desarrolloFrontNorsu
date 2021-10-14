import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import {CaptchaModule} from 'primeng/captcha';
import {DividerModule} from 'primeng/divider';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CaptchaModule,
    DividerModule
  ],
  exports: [
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CaptchaModule,
    DividerModule
  ]
})
export class PrimengModule { }
