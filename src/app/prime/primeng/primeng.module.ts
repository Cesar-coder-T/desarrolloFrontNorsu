import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputTextModule
  ],
  exports: [
    InputTextModule
  ]
})
export class PrimengModule { }
