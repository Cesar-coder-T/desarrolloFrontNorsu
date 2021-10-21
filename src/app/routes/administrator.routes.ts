import { Routes } from "@angular/router";
import { CreateCourseComponent } from "../pages/administrator/manage-courses/create-course/create-course.component";
import { ManageCoursesComponent } from "../pages/administrator/manage-courses/manage-courses.component";
import { MgCourseComponent } from "../pages/administrator/manage-courses/mg-course/mg-course.component";

export const ADMINISTRATOR_ROUTES: Routes = [
    {path: 'gestionar-cursos', component: ManageCoursesComponent},
    {path: 'crear-curso', component: CreateCourseComponent},
    {path: 'gestionar-curso', component: MgCourseComponent}
];