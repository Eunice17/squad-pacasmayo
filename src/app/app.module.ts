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
import { ConfirmationMessageDriverComponent } from './view/main-driver/components/confirmation-message-driver/confirmation-message-driver.component';
import { NewRequirementComponent } from './view/main-client/components/new-requirement/new-requirement.component';

//Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FormBuilder,
    // Validators,
    // FormsModule,
    // ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
