import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { AuthI}from '../../../../models/auth'

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  // docValue="";
  minPassLength = 6;
  user:any

  public loginForm!: FormGroup;
  public buildForm(){    
  } 

  constructor(
    private _formBuilder: FormBuilder,
    private userservice: UsersService,
    private router: Router
  ) {
    this.loginForm = this._formBuilder.group({
      documentoIdCtrl: ['', Validators.required],
      contrasenaCtrl: ['', Validators.required]
    })
  }
  

  ngOnInit(): void {
    
  }

  sendCredential(doc: string, pass: string){
    this.userservice.getAuthUser(doc).subscribe((userSnapshot)=>{
      this.user={};
      userSnapshot.forEach((elem: any) =>{
        this.user= {
          id: elem.payload.doc.id,
          name: elem.payload.doc.data().name,
          documento: elem.payload.doc.data().document,
          password: elem.payload.doc.data().password,
          isDriver: elem.payload.doc.data().rol
        }   
      })

      if(this.user.documento == doc && this.user.password == pass ){
        sessionStorage.setItem('user',JSON.stringify(this.user));
        console.log('es usuario');
        if(this.user.isDriver === "true"){
          this.router.navigate(['/driver']);
        } else {
          this.router.navigate(['/client']);
        } 
      } else{
        alert('Registrate');
        this.router.navigate(['/register']);
      }
    })
  }

  

  login(){
    const docValue = this.loginForm.value.documentoIdCtrl;
    const passValue = this.loginForm.value.contrasenaCtrl;
    this.sendCredential(docValue, passValue)
  }

  goToHome(){
    localStorage.removeItem('rol');
    this.router.navigate(['/home'])
  }
  
 
}

