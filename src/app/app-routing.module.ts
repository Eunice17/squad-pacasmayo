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
import { ShipmentDetailComponent } from './view/main-driver/components/shipment-detail/shipment-detail.component';
import { SelectShipmentComponent } from './view/main-driver/components/select-shipment/select-shipment.component';
import { MenuDriverComponent } from './view/main-driver/components/menu-driver/menu-driver.component';
import { ConfirmationRegisterComponent } from './view/login/components/confirmation-register/confirmation-register.component';
import { SelectTruckComponent } from './view/main-driver/components/select-truck/select-truck.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'formlogin', component: FormLoginComponent },
  {
    path: 'driver', component: MainDriverComponent,
    children: [
      { path: '', redirectTo: 'menu-driver', pathMatch: 'full' },
      { path: 'menu-driver', component: MenuDriverComponent },
      { path: 'shipment', component: SelectShipmentComponent }
    ]
  },
  { path: 'newreq', component: NewRequirementComponent },
  { path: 'client', component: MainClientComponent },
  { path: 'newtruck', component: NewTruckComponent },
  { path: 'waiting', component: WaitingDriverComponent },
  { path: 'confirtruck', component: ConfirmationRegisterTruckComponent },
  { path: 'confirdriver', component: ConfirmationMessageDriverComponent },
  { path: 'confirregister', component: ConfirmationRegisterComponent },
  { path: 'select', component: SelectTruckComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
