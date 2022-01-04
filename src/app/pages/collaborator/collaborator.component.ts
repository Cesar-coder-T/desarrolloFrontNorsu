import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.css']
})
export class CollaboratorComponent {

  options: any;

  constructor() {
    this.options = [
      {
        icon: 'play_lesson',
        title: 'Cursos',
        route: '/colaborador/mis-cursos',
      },
      {
        icon: 'library_books',
        title: 'Certificados',
        route: '/administrador/gestionar-empresas',
      },
      {
        icon: 'account_circle',
        title: 'Mi Perfil',
        route: '/colaborador/mi-perfil',
      }
    ];
  }

}
