import { Routes } from "@angular/router";
import { ProfileComponent } from "../pages/collaborator/profile/profile.component";
import { CoursesComponent } from "../pages/collaborator/courses/courses.component";
import { CertificatesComponent } from "../pages/collaborator/certificates/certificates.component";
import { HomeComponent } from "../pages/collaborator/home/home.component";
import { NotificationsComponent } from "../pages/collaborator/notifications/notifications.component";
import { SettingsComponent } from "../pages/collaborator/settings/settings.component";

export const COLLABORATOR_ROUTES: Routes = [
    {path: 'mi-perfil', component: ProfileComponent},
    {path: 'inicio', component: HomeComponent},
    {path: 'mis-cursos', component: CoursesComponent},
    {path: 'notificaciones', component: NotificationsComponent},
    {path: 'mis-certificados', component: CertificatesComponent},
    {path: 'configuraciones', component: SettingsComponent}
];