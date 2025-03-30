import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { InternshipComponent } from './internship/internship.component';
import { homedir } from 'node:os';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import path from 'node:path';
import { Component } from '@angular/core';
import { UserService } from './users/user.service';
import { AppComponent } from './app.component';
import { CertificateComponent } from './certificate/certificate.component';

export const routes: Routes = [
   
    {path:'', component:HomeComponent},
    {path:'home', component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'about', component:AboutComponent},
    {path:'contact', component:ContactComponent},
    {path:'courses', component:CoursesComponent},
    {path:'certificate',component:CertificateComponent},
    {path:'internship', component:InternshipComponent}
];
