import { Routes } from '@angular/router';
import { ManageAdminsComponent } from '../pages/administrator/manage-admins/manage-admins.component';
import { CreateCourseComponent } from '../pages/administrator/manage-courses/create-course/create-course.component';
import { GnrlsComponent } from '../pages/administrator/manage-courses/create-course/gnrls/gnrls.component';
import { WlcmComponent } from '../pages/administrator/manage-courses/create-course/wlcm/wlcm.component';
import { ManageCoursesComponent } from '../pages/administrator/manage-courses/manage-courses.component';
import { MgCourseComponent } from '../pages/administrator/manage-courses/mg-course/mg-course.component';
import { SettingsComponent } from '../pages/administrator/settings/settings.component';

export const ADMINISTRATOR_ROUTES: Routes = [
  { path: 'gestionar-cursos', component: ManageCoursesComponent },
  {
    path: 'crear-curso',
    component: CreateCourseComponent,
    children: [
      { path: 'generalidades', component: GnrlsComponent },
      { path: 'bienvenida', component: WlcmComponent },
    ],
  },
  { path: 'gestionar-curso/:nombre', component: MgCourseComponent },
  { path: 'gestionar-administradores', component: ManageAdminsComponent },
  { path: 'configuraciones', component: SettingsComponent }
];
