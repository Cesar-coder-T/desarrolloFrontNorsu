import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material/material.module';
import { PrimengModule } from './prime/primeng/primeng.module';
import { RegistrationComponent } from './pages/registration/registration.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/home/news/news.component';
import { LoginComponent } from './pages/home/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutUsComponent } from './pages/home/about-us/about-us.component';
import { PreferencesComponent } from './pages/preferences/preferences.component';
import { CategoriesComponent } from './pages/preferences/categories/categories.component';
import { CheckComponent } from './pages/check/check.component';
import { CodeComponent } from './pages/check/code/code.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomeComponent,
    NewsComponent,
    LoginComponent,
    AboutUsComponent,
    PreferencesComponent,
    CategoriesComponent,
    CheckComponent,
    CodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    PrimengModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
