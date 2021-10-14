import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { PreferencesComponent } from './pages/preferences/preferences.component';
import { CheckComponent } from './pages/check/check.component';

const routes: Routes = [
  {path: 'registro', component: RegistrationComponent},
  {path: 'preferencias', component: PreferencesComponent},
  {path: 'verificacion', component: CheckComponent},
  {path: '', component: HomeComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
