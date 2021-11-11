import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CaptchaModule } from 'primeng/captcha';
import { DividerModule } from 'primeng/divider';
import { InputNumberModule } from 'primeng/inputnumber';
import { StepsModule } from 'primeng/steps';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import {CheckboxModule} from 'primeng/checkbox';
import { SkeletonModule } from 'primeng/skeleton';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CaptchaModule,
    DividerModule,
    InputNumberModule,
    StepsModule,
    FileUploadModule,
    CheckboxModule,
    HttpClientModule,
    SkeletonModule
  ],
  exports: [
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CaptchaModule,
    DividerModule,
    InputNumberModule,
    StepsModule,
    FileUploadModule,
    CheckboxModule,
    HttpClientModule,
    SkeletonModule
  ]
})
export class PrimengModule { }
