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
import { CheckboxModule } from 'primeng/checkbox';
import { SkeletonModule } from "primeng/skeleton";
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ProgressBarModule } from 'primeng/progressbar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DialogModule } from 'primeng/dialog';
import {ScrollPanelModule} from 'primeng/scrollpanel';

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
    SkeletonModule,
    ProgressSpinnerModule,
    ProgressBarModule,
    DropdownModule,
    InputTextareaModule,
    SelectButtonModule,
    ScrollPanelModule,
    DialogModule
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
    SkeletonModule,
    ProgressSpinnerModule,
    ProgressBarModule,
    DropdownModule,
    InputTextareaModule,
    SelectButtonModule,
    ScrollPanelModule,
    DialogModule
  ]
})
export class PrimengModule { }
