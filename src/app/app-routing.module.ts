import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { PreferencesComponent } from './pages/preferences/preferences.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'registro', component: RegistrationComponent},
  {path: 'preferencias', component: PreferencesComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
