import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isLinear = false;
  public firstFormGroup!: FormGroup;
  public secondFormGroup!: FormGroup;

  // this.firstFormGroup= new FormGroup({
  //   firstCtrl: new FormControl('')
  // });
  // this.secondFormGroup= new FormGroup({
  //   secondCtrl: new FormControl ('')
  // })

  constructor(private _formBuilder: FormBuilder) { 
    // 
   
  }
   
  
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
