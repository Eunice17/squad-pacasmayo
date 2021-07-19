import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})


// interface Animal {
//   name: string;
//   sound: string;
// }

export class RegisterComponent implements OnInit {
  isLinear = false;
  public firstFormGroup!: FormGroup;
  public secondFormGroup!: FormGroup;
 
  // animals=[]

  // animals=[]
  animals!: [
    { name: 'Dog'; sound: 'Woof!'; },
    { name: 'Cat'; sound: 'Meow!'; },
    { name: 'Cow'; sound: 'Moo!'; },
    { name: 'Fox'; sound: 'Wa-pa-pa-pa-pa-pa-pow!'; }
  ];
 

  constructor(private _formBuilder: FormBuilder,
    private router: Router,) { 
    // 
   
  }
   
  
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      nameCtrl: ['', Validators.required],
      lastnameCtrl: ['', Validators.required],
      animalControl: ['', Validators.required],
      // animalControl: new FormControl('', Validators.required),
      documentCtrl: ['', Validators.required, Validators.maxLength(8), Validators.minLength(8)],
      emailCtrl: ['', Validators.required, Validators.email],
      phoneCtrl: ['', Validators.required],
      rucCtrl: ['', Validators.required, Validators.maxLength(10)],
      departmentCtrl: ['', Validators.required],
      provinceCtrl: ['', Validators.required],
      districtCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      passwordCtrl: ['', Validators.required, Validators.minLength(8)],
      password1Ctrl: ['', Validators.required, Validators.minLength(8)]
    });
  }

  goToConfirmationR(){
    this.router.navigate(['/confirregister']);
  }

  goToMenuDriver(){
    console.log('click en ahora no');
    
  }

}
