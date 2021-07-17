import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';
import { MainDriverComponent } from './view/main-driver/main-driver.component';
import { MainClientComponent } from './view/main-client/main-client.component';
import { RegisterComponent } from './components/register/register.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { FormNewTruckComponent } from './components/form-new-truck/form-new-truck.component';
import { SelectShipmentComponent } from './components/select-shipment/select-shipment.component';
import { ShipmentDetailComponent } from './components/shipment-detail/shipment-detail.component';
import { SelectTruckComponent } from './components/select-truck/select-truck.component';
import { ConfirmationMessageComponent } from './components/confirmation-message/confirmation-message.component';
import { NewRequirementClientComponent } from './components/new-requirement-client/new-requirement-client.component';
import { RequirementDetailComponent } from './components/requirement-detail/requirement-detail.component';
import { WaitingDriverComponent } from './components/waiting-driver/waiting-driver.component';
import { ConfirmationMessageClientComponent } from './components/confirmation-message-client/confirmation-message-client.component';
import { NewTruckComponent } from './view/main-driver/components/new-truck/new-truck.component';
import { ConfirmationMessageDriverComponent } from './view/main-driver/components/confirmation-message-driver/confirmation-message-driver.component';
import { NewRequirementComponent } from './view/main-client/components/new-requirement/new-requirement.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    LoginComponent,
    MainDriverComponent,
    MainClientComponent,
    RegisterComponent,
    FormLoginComponent,
    FormNewTruckComponent,
    SelectShipmentComponent,
    ShipmentDetailComponent,
    SelectTruckComponent,
    ConfirmationMessageComponent,
    NewRequirementClientComponent,
    RequirementDetailComponent,
    WaitingDriverComponent,
    ConfirmationMessageClientComponent,
    NewTruckComponent,
    ConfirmationMessageDriverComponent,
    NewRequirementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
