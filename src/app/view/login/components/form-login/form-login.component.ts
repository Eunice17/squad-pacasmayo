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

    // this.docValue = 
  }
  

  ngOnInit(): void {
    
  }

  probando(doc: string, pass: string){
    this.userservice.getAuthUser(doc).subscribe((userSnapshot)=>{
      //console.log(userSnapshot);
      this.user={};
      userSnapshot.forEach((elem: any) =>{
        //console.log(elem.payload.doc.id);
        //console.log(elem.payload.doc.data());
        this.user= {
          id: elem.payload.doc.id,
          documento: elem.payload.doc.data().document,
          password: elem.payload.doc.data().password,
          isDriver: elem.payload.doc.data().rol
        }
        
      })
/*       console.log(this.user.password);
      console.log(pass);
      console.log(doc); */
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
/* 
    console.log(docValue); */
    this.probando(docValue, passValue)
    //console.log(this.loginForm.value);
  }
  
 
}

