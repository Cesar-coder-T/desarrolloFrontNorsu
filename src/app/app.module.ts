import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material/material.module';
import { PrimengModule } from './prime/primeng/primeng.module';
import { RegistrationComponent } from './pages/registration/registration.component';
import { HomeComponent } from './pages/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PreferencesComponent } from './pages/preferences/preferences.component';
import { CategoriesComponent } from './pages/preferences/categories/categories.component';
import { CheckComponent } from './pages/check/check.component';
import { CodeComponent } from './pages/check/code/code.component';
import { CollaboratorComponent } from './pages/collaborator/collaborator.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CoursesComponent } from './pages/collaborator/courses/courses.component';
import { AdministratorComponent } from './pages/administrator/administrator.component';
import { ManageCoursesComponent } from './pages/administrator/manage-courses/manage-courses.component';
import { CreateCourseComponent } from './pages/administrator/manage-courses/create-course/create-course.component';
import { MgCourseComponent } from './pages/administrator/manage-courses/mg-course/mg-course.component';
import { ShowCoursesComponent } from './pages/administrator/manage-courses/show-courses/show-courses.component';
import { GnrlsComponent } from './pages/administrator/manage-courses/create-course/gnrls/gnrls.component';
import { WlcmComponent } from './pages/administrator/manage-courses/create-course/wlcm/wlcm.component';
import { ProfileComponent } from './pages/collaborator/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomeComponent,
    PreferencesComponent,
    CategoriesComponent,
    CheckComponent,
    CodeComponent,
    CollaboratorComponent,
    CoursesComponent,
    AdministratorComponent,
    ManageCoursesComponent,
    CreateCourseComponent,
    MgCourseComponent,
    ShowCoursesComponent,
    GnrlsComponent,
    WlcmComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    PrimengModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
