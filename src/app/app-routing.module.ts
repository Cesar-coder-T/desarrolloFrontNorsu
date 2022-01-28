import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { PreferencesComponent } from './pages/preferences/preferences.component';
import { CheckComponent } from './pages/check/check.component';
import { CollaboratorComponent } from './pages/collaborator/collaborator.component';
import { AdministratorComponent } from './pages/administrator/administrator.component';
import { ADMINISTRATOR_ROUTES } from './routes/administrator.routes';
import { COLLABORATOR_ROUTES } from './routes/collaborator.routes';
import { ShowCompaniesComponent } from './pages/administrator/manage-companies/show-companies/show-companies/show-companies.component';


const routes: Routes = [
  {path: 'sesiones', component: RegistrationComponent},
  {path: 'preferencias', component: PreferencesComponent},
  {path: 'verificacion', component: CheckComponent},
  {path: 'colaborador', component: CollaboratorComponent, children: COLLABORATOR_ROUTES},
  {path: 'administrador', component: AdministratorComponent, children: ADMINISTRATOR_ROUTES},
  {path: 'empresas', component: ShowCompaniesComponent},
  {path: '', component: HomeComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
