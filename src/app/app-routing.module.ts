import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDriverComponent } from './view/main-driver/main-driver.component';
import { HomeComponent } from './view/home/home.component';
import { FormLoginComponent } from './view/login/components/form-login/form-login.component';
import { RegisterComponent } from './view/login/components/register/register.component';
import { LoginComponent } from './view/login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'formlogin', component: FormLoginComponent },
  { path: 'driver', component: MainDriverComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
