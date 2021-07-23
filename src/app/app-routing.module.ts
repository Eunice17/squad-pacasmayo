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
import { SelectShipmentComponent } from './view/main-driver/components/select-shipment/select-shipment.component';
import { MenuDriverComponent } from './view/main-driver/components/menu-driver/menu-driver.component';
import { ConfirmationRegisterComponent } from './view/login/components/confirmation-register/confirmation-register.component';
import { SelectTruckComponent } from './view/main-driver/components/select-truck/select-truck.component';

import { RequirementDetailComponent } from './view/main-client/components/requirement-detail/requirement-detail.component';
import { ShipmentDetailComponent } from './view/main-driver/components/shipment-detail/shipment-detail.component';
import { Prueba1Component } from './prueba/prueba1/prueba1.component';
import { Prueba2Component } from './prueba/prueba2/prueba2.component';
import { P404Component } from './components/p404/p404.component'

const routes: Routes = [
  { path: 'prueba', component: Prueba1Component },
  { path: 'prueba2', component: Prueba2Component },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'order', component: RequirementDetailComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent},
  { path: 'notfound', component: P404Component},
  { path: 'formlogin', component: FormLoginComponent },
  {
    path: 'driver', component: MainDriverComponent,
    children: [
      { path: '', redirectTo: 'menu-driver', pathMatch: 'full' },
      { path: 'menu-driver', component: MenuDriverComponent },
      { path: 'shipment', component: SelectShipmentComponent },
      { path: 'newtruck', component: NewTruckComponent },
      { path: 'confirtruck', component: ConfirmationRegisterTruckComponent },
      { path: 'select', component: SelectTruckComponent},  
      { path: 'confirdriver', component: ConfirmationMessageDriverComponent },
      { path: 'shipdetail', component: ShipmentDetailComponent},
    ]
  },
  { path: 'confirregister', component: ConfirmationRegisterComponent},
  { path: 'newreq', component: NewRequirementComponent },
  { path: 'client', component: MainClientComponent },
  { path: 'waiting', component: WaitingDriverComponent },
  
 //BORRAR LUEGO
  { path: 'detail', component: RequirementDetailComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
