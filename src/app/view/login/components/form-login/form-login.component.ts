import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
  minPassLength = 6;
  constructor(
    public formBuilder: FormBuilder,
  ) { }
  // this.loginForm = this.formBuilder.group({
  //   email: ['', [Validators.required, Validators.email]],
  //   password: ['', [Validators.required, Validators.minLength(this.minPassLength)]],
  // })

  
  // loginForm = this.formBuilder.group({
  //   email: ['', [Validators.required, Validators.email]],
  //   password: ['', [Validators.required, Validators.minLength(this.minPassLength)]],
  // })
  public buildForm(){    
  } 
  

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email: new FormControl ('', Validators.compose([Validators.required, Validators.email])),
      password: new FormControl ('', Validators.compose([Validators.required, Validators.minLength(this.minPassLength)])),
    });
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
}
