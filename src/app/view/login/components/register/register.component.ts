import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import { Router } from '@angular/router';
import { UsersService } from '../../../../services/users.service';
import { UbigeoService } from 'src/app/services/ubigeo.service';
import  * as departamentos from  '../../../../services/data/departamentos.json';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  isLinear = false;
  public firstFormGroup!: FormGroup;
  public secondFormGroup!: FormGroup;
  public thirdFormGroup!: FormGroup;

  constructor(private _formBuilder: FormBuilder,
    private router: Router, private userService: UsersService, 
    private ubigeoService: UbigeoService) { 
      this.firstFormGroup = this._formBuilder.group({
        nameCtrl: ['', Validators.required],
        lastnameCtrl: ['', Validators.required],
        documentCtrl: ['', Validators.required, Validators.minLength(8)],
        emailCtrl: ['', Validators.email],
        phoneCtrl: ['', Validators.required],
        rucCtrl: ['', Validators.required, Validators.maxLength(10)],
        });
      this.secondFormGroup = this._formBuilder.group({
        direccionCtrl: ['', Validators.required],
        departmentCtrl: ['', Validators.required],
        provinceCtrl: ['', Validators.required],
        districtCtrl: ['', Validators.required]
      });
      this.thirdFormGroup = this._formBuilder.group({
        passwordCtrl: ['', Validators.required],
        password1Ctrl: ['', Validators.required]
      });
  }
   
  
  ngOnInit() {
   
    this.ubigeoService.getDepartamentos().subscribe((o)=>{
      console.log(o);
    })
  }

  sendUser(){ //enviar todos los datos de registro a friebase
    const firstForm= this.firstFormGroup.value;
    const secondForm= this.secondFormGroup.value;
    const thirdForm= this.secondFormGroup.value;
    const newObject = {
      name: firstForm.nameCtrl,
      lastname: firstForm.lastnameCtrl,
      document: firstForm.documentCtrl,
      email: firstForm.emailCtrl,
      phone: firstForm.phoneCtrl,
      ruc: firstForm.rucCtrl,
      direccion: secondForm.direccionCtrl,
      department: secondForm.departmentCtrl,
      province: secondForm.provinceCtrl,
      district: secondForm.districtCtrl,
      password: thirdForm.passwordCtrl,
      rol: localStorage.getItem('rol')
    }
    
    console.log(newObject)
    this.createUser(newObject);
    this.goToLogin()
  }

  //llamada al servicio
  createUser(obj: any){
    console.log('dentro de createUser',obj);
    this.userService.createUser(obj).then(()=>{
      this.router.navigate(['/confirregister']);
    })
  }

  goToMenuDriver(){
    console.log('click en ahora no!');
  }
  goToLogin(){
    this.router.navigate(['/home']);
    localStorage.removeItem('rol');
    sessionStorage.removeItem('user');
  }

}
