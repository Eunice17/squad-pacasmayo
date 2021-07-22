import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import { Router } from '@angular/router';
import { UsersService } from '../../../../services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  isLinear = false;
  public firstFormGroup!: FormGroup;
  public secondFormGroup!: FormGroup;

  constructor(private _formBuilder: FormBuilder,
    private router: Router, private userService: UsersService) { 
      this.firstFormGroup = this._formBuilder.group({
        nameCtrl: ['', Validators.required],
        lastnameCtrl: ['', Validators.required],
        documentCtrl: ['', Validators.required, Validators.maxLength(8), Validators.minLength(8)],
        emailCtrl: ['', Validators.email],
        phoneCtrl: ['', Validators.required],
        rucCtrl: ['', Validators.required, Validators.maxLength(10)],
        direccionCtrl: ['', Validators.required],
        departmentCtrl: ['', Validators.required],
        provinceCtrl: ['', Validators.required],
        districtCtrl: ['', Validators.required]
      });
      this.secondFormGroup = this._formBuilder.group({
        passwordCtrl: ['', Validators.required],
        password1Ctrl: ['', Validators.required]
      });
  }
   
  
  ngOnInit() {
   
    
  }

  getInputUserF1(){
    // console.log(this.firstFormGroup.value)
  }

  sendUser(){ //enviar todos los datos de registro a friebase
    const firstForm= this.firstFormGroup.value;
    const secondForm= this.secondFormGroup.value;
    const newObject = {
      name: firstForm.nameCtrl,
      lastname: firstForm.lastnameCtrl,
      document: firstForm.documentCtrl,
      email: firstForm.emailCtrl,
      phone: firstForm.phoneCtrl,
      ruc: firstForm.rucCtrl,
      direccion: firstForm.direccionCtrl,
      department: firstForm.departmentCtrl,
      province: firstForm.provinceCtrl,
      district: firstForm.districtCtrl,
      password: secondForm.passwordCtrl,
      rol: localStorage.getItem('rol')
    }
    
    console.log(newObject)
    this.createUser(newObject);
    //this.router.navigate(['/confirregister']);
    
  }

  //llamada al servicio
  createUser(obj: any){  
  this.userService.createUser(obj).then(()=>{
      
    })
  }

  goToMenuDriver(){
    console.log('click en ahora no');

  }

}
