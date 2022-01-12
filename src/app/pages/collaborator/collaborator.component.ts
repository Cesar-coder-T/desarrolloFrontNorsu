import { Component } from '@angular/core';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.css']
})
export class CollaboratorComponent {

  /*SideNav App options*/
  options: any;

  constructor() {
    /*SideNav App options*/
    this.options = [
      {
        icon: 'account_circle',
        title: 'Mi Perfil',
        route: '/colaborador/mi-perfil',
      },
      {
        icon: 'play_lesson',
        title: 'Cursos',
        route: '/colaborador/mis-cursos',
      },
      {
        icon: 'library_books',
        title: 'Certificados',
        route: '/colaborador/mis-certificados',
      }
    ];
    /*End sideNav App options*/
  }

}
