import { Component } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

/**
 * SideNav data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface SideNavNode {
  name: string;
  children?: any;
}

const TREE_DATA: SideNavNode[] = [
  {
    name: 'Cursos',
    children: [
      { name: 'Ver Listado', icon: 'play_lesson', route: 'gestionar-cursos' },
      { name: 'Crear', icon: 'add_circle_outline', route: 'crear-curso' },
    ],
  },
  {
    name: 'Empresas',
    children: [
      { name: 'Ver Listado', icon: 'business', route: 'ruta' },
      { name: 'Crear', icon: 'domain_add', route: 'ruta' },
    ],
  },
  {
    name: 'Administradores',
    children: [
      { name: 'Ver Listado', icon: 'groups', route: 'route' },
      { name: 'Crear', icon: 'person_add_alt', route: 'route' },
    ],
  },
];

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css'],
})
export class AdministratorComponent {
  /*Default settings for the SideNav's trees.*/
  treeControl = new NestedTreeControl<SideNavNode>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<SideNavNode>();
  /*Default settings for the SideNav's trees.*/

  /*Default path for the admin*/
  path: string;

  options: any;

  constructor() {
    /*Default settings for the SideNav's trees.*/
    this.dataSource.data = TREE_DATA;
    /*Default settings for the SideNav's trees.*/
    this.path = '/administrador/';
    this.options = [
      {
        icon: 'play_lesson',
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
  }

  /*Default settings for the SideNav's trees.*/
  hasChild = (_: number, node: SideNavNode) =>
    !!node.children && node.children.length > 0;
  /*Default settings for the SideNav's trees.*/

}
