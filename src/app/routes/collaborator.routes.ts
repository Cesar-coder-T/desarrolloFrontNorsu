import { Routes } from "@angular/router";
import { ProfileComponent } from "../pages/collaborator/profile/profile.component";
import { CoursesComponent } from "../pages/collaborator/courses/courses.component";

export const COLLABORATOR_ROUTES: Routes = [
    {path: 'mi-perfil', component: ProfileComponent},
    {path: 'mis-cursos', component: CoursesComponent}
];