import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { PreferencesComponent } from './pages/preferences/preferences.component';
import { CheckComponent } from './pages/check/check.component';
import { CollaboratorComponent } from './pages/collaborator/collaborator.component';
import { CoursesComponent } from './pages/collaborator/courses/courses.component';

const routes: Routes = [
  {path: 'registro', component: RegistrationComponent},
  {path: 'preferencias', component: PreferencesComponent},
  {path: 'verificacion', component: CheckComponent},
  {path: 'colaborador', component: CollaboratorComponent,
  children: [
    {path: 'mis-cursos', component: CoursesComponent}
  ]},
  {path: '', component: HomeComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
