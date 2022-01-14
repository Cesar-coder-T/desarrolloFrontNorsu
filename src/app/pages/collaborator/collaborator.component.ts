import { Component } from '@angular/core';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.css']
})
export class CollaboratorComponent {

  stateSklt: boolean;

  /*Remove this when the API implemented*/
  stateInfo: boolean;
  /*Remove this when the API implemented*/

  /*SideNav App options*/
  options: any;

  constructor() {
    this.stateSklt = true;

    /*Remove this when the API implemented*/
    this.stateInfo = false;
    /*Remove this when the API implemented*/

    /*SideNav App options*/
    this.options = [
      {
        icon: 'play_lesson',
        title: 'Cursos',
        route: '/colaborador/mis-cursos',
      },
      {
        icon: 'library_books',
        title: 'Certificados',
        route: '/colaborador/mis-certificados',
      },
      {
        icon: 'account_circle',
        title: 'Mi Perfil',
        route: '/colaborador/mi-perfil',
      }
    ];
    /*End sideNav App options*/
  }

}
