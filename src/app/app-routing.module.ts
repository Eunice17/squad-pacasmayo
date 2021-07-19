import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDriverComponent } from './view/main-driver/main-driver.component';
import { HomeComponent } from './view/home/home.component';
import { FormLoginComponent } from './view/login/components/form-login/form-login.component';
import { RegisterComponent } from './view/login/components/register/register.component';
import { LoginComponent } from './view/login/login.component';
import { NewTruckComponent } from './view/main-driver/components/new-truck/new-truck.component';
import { NewRequirementComponent } from './view/main-client/components/new-requirement/new-requirement.component';
import { ConfirmationRegisterTruckComponent } from './view/main-driver/components/confirmation-register-truck/confirmation-register-truck.component';
import { MainClientComponent } from './view/main-client/main-client.component';
import { ConfirmationMessageDriverComponent } from './view/main-driver/components/confirmation-message-driver/confirmation-message-driver.component';
import { WaitingDriverComponent } from './view/main-client/components/waiting-driver/waiting-driver.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'formlogin', component: FormLoginComponent },
  { path: 'driver', component: MainDriverComponent },
  { path: 'newreq', component: NewRequirementComponent },
  { path: 'client', component: MainClientComponent },
  { path: 'newtruck', component: NewTruckComponent },
  { path: 'waiting', component: WaitingDriverComponent },
  { path: 'confirtruck', component: ConfirmationRegisterTruckComponent },
  { path: 'confirdriver', component: ConfirmationMessageDriverComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
