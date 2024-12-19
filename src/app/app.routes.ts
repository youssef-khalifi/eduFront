import { Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {HomeComponent} from "./components/home/home.component";
import {authGuard} from "./guard/auth.guard";
import {TeacherLoginComponent} from "./components/teacher-login/teacher-login.component";
import path from "node:path";
import {ProfileComponent} from "./components/profile/profile.component";

export const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'login',component:TeacherLoginComponent},
  {path:'',component:LoginComponent},
  { path: 'home', component: HomeComponent, canActivate: [authGuard], children:
      [
        {path : 'profile' , component : ProfileComponent}
      ]
  }
];
