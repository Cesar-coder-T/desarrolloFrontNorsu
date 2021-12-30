import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css'],
})
export class CreateCourseComponent implements OnInit {

  /*Stepper*/
  items: MenuItem[];
  styleStepper: any;
  /*End stepper*/

  constructor() {
    this.items = [
      {label: "Generalidades", routerLink: "/administrador/crear-curso/generalidades"},
      {label: "Bienvenida", routerLink: "/administrador/crear-curso/bienvenida"}
    ];
    this.styleStepper = {
      "width": "80%",
      "margin": "0 auto"
    };
  }

  ngOnInit(): void {
    if((window.screen.width > 500) && (window.screen.width <= 670)){
      this.styleStepper = {
        "width": "90%",
        "margin": "0 auto"
      };
    }else if(window.screen.width <= 500){
      this.styleStepper = {
        "width": "100%",
        "margin": "0 auto"
      };
    }
  }

}
