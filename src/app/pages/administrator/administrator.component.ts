import { Component } from '@angular/core';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css'],
})
export class AdministratorComponent {

  /*Small SideNav*/
  optionsSmallMenu: any;
  /*Small SideNav*/

  options: any;

  /*Other options*/
  visibilityOtherOptions: String;
  iconOther: String;
  otherOptions: any;
  /*Other options*/

  constructor() {
    /*Small SideNav options*/
    this.optionsSmallMenu = [
      {
        icon: 'menu_book',
        title: 'Cursos',
        route: '/administrador/gestionar-cursos',
      },
      {
        icon: 'category',
        title: 'Categoria',
        route: '/administrador/gestionar-categorias',
      },
      {
        icon: 'business',
        title: 'Empresas',
        route: '/administrador/gestionar-empresas',
      },
      {
        icon: 'groups',
        title: 'Admin',
        route: '/administrador/gestionar-administradores',
      },
      {
        icon: 'settings',
        title: 'Configuración',
        route: '/administrador/configuraciones',
      }
    ];
    /*Small SideNav options*/
    this.options = [
      {
        icon: 'menu_book',
        title: 'Cursos',
        route: '/administrador/gestionar-cursos',
      },
      {
        icon: 'business',
        title: 'Empresas',
        route: '/administrador/gestionar-empresas',
      },
      {
        icon: 'groups',
        title: 'Admin',
        route: '/administrador/gestionar-administradores',
      }
    ];
    /*Other options*/
    this.visibilityOtherOptions = 'none';
    this.iconOther = "more_horiz";
    this.otherOptions = [
      {
        icon: 'settings',
        title: 'Configuración',
        route: '/administrador/configuraciones',
      }
    ];
    /*Other options*/
  }

  showOtherOptions() {
    if (this.visibilityOtherOptions == 'none') {
      this.visibilityOtherOptions = 'block';
      this.iconOther = "close";
    } else {
      this.visibilityOtherOptions = 'none';
      this.iconOther = "more_horiz";
    }
  }

  closeOtherOptions() {
    this.visibilityOtherOptions = "none";
    this.iconOther = "more_horiz";
  }

}
