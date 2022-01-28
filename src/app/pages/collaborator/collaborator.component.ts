import { Component } from '@angular/core';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.css'],
})
export class CollaboratorComponent {
  stateSklt: boolean;

  /*Remove this when the API implemented*/
  stateInfo: boolean;
  /*Remove this when the API implemented*/

  /*Small SideNav*/
  optionsSmallMenu: any;
  /*Small SideNav*/

  /*SideNav App options*/
  options: any;
  stylesProfileOptionMenu: {};
  /*SideNav App options*/

  /*Other options*/
  visibilityOtherOptions: String;
  otherOptions: any;
  /*Other options*/

  constructor() {
    this.stateSklt = true;

    /*Remove this when the API implemented*/
    this.stateInfo = false;
    /*Remove this when the API implemented*/

    /*Small SideNav options*/
    this.optionsSmallMenu = [
      {
        icon: 'home',
        title: 'Inicio',
        route: '/colaborador/inicio',
      },
      {
        icon: 'menu_book',
        title: 'Cursos',
        route: '/colaborador/mis-cursos',
      },
      {
        icon: 'notifications',
        title: 'Notificaciones',
        route: '/colaborador/notificaciones',
      },
      {
        icon: 'library_books',
        title: 'Mis certificados',
        route: '/colaborador/mis-certificados',
      },
      {
        icon: 'settings',
        title: 'Configuración',
        route: '/colaborador/configuraciones',
      }
    ];
    /*Small SideNav options*/

    /*SideNav App options*/
    this.options = [
      {
        icon: 'home',
        title: 'Inicio',
        route: '/colaborador/inicio',
      },
      {
        icon: 'menu_book',
        title: 'Cursos',
        route: '/colaborador/mis-cursos',
      },
      {
        icon: 'notifications',
        title: 'Notificaciones',
        route: '/colaborador/notificaciones',
      },
    ];
    this.stylesProfileOptionMenu = {
      'width': '32px',
      'height': '32px',
      'border-radius': '50%',
    };
    /*End sideNav App options*/

    /*Other options*/
    this.visibilityOtherOptions = 'none';
    this.otherOptions = [
      {
        icon: 'account_circle',
        title: 'Mi perfil',
        route: '/colaborador/mi-perfil',
      },
      {
        icon: 'library_books',
        title: 'Mis certificados',
        route: '/colaborador/mis-certificados',
      },
      {
        icon: 'settings',
        title: 'Configuración',
        route: '/colaborador/configuraciones',
      },
    ];
    /*Other options*/
  }

  showOtherOptions() {
    if (this.visibilityOtherOptions == 'none') {
      this.visibilityOtherOptions = 'block';
      this.stylesProfileOptionMenu = {
        'width': '35px',
        'height': '35px',
        'border-radius': '50%',
        'padding': '1px',
        'border': '2px solid #293347'
      };
    } else {
      this.visibilityOtherOptions = 'none';
      this.stylesProfileOptionMenu = {
        'width': '32px',
        'height': '32px',
        'border-radius': '50%',
      };
    }
  }

  closeOtherOptions() {
    this.visibilityOtherOptions = "none";
    this.stylesProfileOptionMenu = {
      'width': '32px',
      'height': '32px',
      'border-radius': '50%',
    };
  }
}
