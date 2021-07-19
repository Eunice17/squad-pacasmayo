import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  // loginForm= new FormGroup({
  //   email: new FormControl('', [Validators.required]),
  //   password: new FormControl('', [Validators.required]),
  // })
  // minPassLength: number = 6;
  loginForm!: FormGroup;
  // this.loginForm = this.formBuilder.group({
  //   email: ['', [Validators.required, Validators.email]],
  //   password: ['', [Validators.required, Validators.minLength(this.minPassLength)]],
  // })

  
  // loginForm = this.formBuilder.group({
  //   email: ['', [Validators.required, Validators.email]],
  //   password: ['', [Validators.required, Validators.minLength(this.minPassLength)]],
  // })
  public buildForm(){
    const minPassLength = 6;
    this.loginForm=this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(minPassLength)]],
    });
  } 
  constructor(
    public formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.buildForm();
  }
  
  login(){
    console.log('hace login');
    // console.warn(this.loginForm.value);
    // if (this.formGroup.valid) {
    //   const value = this.formGroup.value;
    //   this.authService.login(value.email, value.password)
    //   .then(()=>{
    //     this.router.navigate(['/products'])
    //   })
    //   .catch(()=>{
    //     alert('Verifica el email y password, por favor.')
    //   })
    // }
  }
  goFormRegister(){
    this.router.navigate(['register'])
  }
}
