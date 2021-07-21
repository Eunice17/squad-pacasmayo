import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './view/login/login.component';
import { RegisterComponent } from './view/login/components/register/register.component';
import { MainDriverComponent } from './view/main-driver/main-driver.component';
import { MainClientComponent } from './view/main-client/main-client.component';
import { NewTruckComponent } from './view/main-driver/components/new-truck/new-truck.component';
import { HomeComponent } from './view/home/home.component';
import { ConfirmationMessageDriverComponent } from './view/main-driver/components/confirmation-message-driver/confirmation-message-driver.component';
import { NewRequirementComponent } from './view/main-client/components/new-requirement/new-requirement.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { ConfirmationRegisterTruckComponent } from './view/main-driver/components/confirmation-register-truck/confirmation-register-truck.component';
import { ConfirmationRegisterComponent } from './view/login/components/confirmation-register/confirmation-register.component';
import { SelectTruckComponent } from './view/main-driver/components/select-truck/select-truck.component';
import { WaitingDriverComponent } from './view/main-client/components/waiting-driver/waiting-driver.component';

//Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule} from '@angular/material/list';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ShipmentDetailComponent } from './view/main-driver/components/shipment-detail/shipment-detail.component';
import {MatRadioModule} from '@angular/material/radio';
import { MenuDriverComponent } from './view/main-driver/components/menu-driver/menu-driver.component';
import { SelectShipmentComponent } from './view/main-driver/components/select-shipment/select-shipment.component';
import { RequirementDetailComponent } from './view/main-client/components/requirement-detail/requirement-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    RegisterComponent,
    MainDriverComponent,
    MainClientComponent,
    NewTruckComponent,
    ConfirmationMessageDriverComponent,
    NewRequirementComponent,
    HomeComponent,
    SelectTruckComponent,
    ConfirmationRegisterTruckComponent,
    WaitingDriverComponent,
    ConfirmationRegisterComponent,
    ShipmentDetailComponent,
    SelectTruckComponent,
    MenuDriverComponent,
    SelectShipmentComponent,
    ConfirmationRegisterComponent,
    RequirementDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSidenavModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
