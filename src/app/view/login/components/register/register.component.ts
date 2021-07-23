import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../../../services/users.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  isLinear = true;
  // tipo: string[] = ['D.N.I.', 'C.E.'];
  public firstFormGroup!: FormGroup;
  public secondFormGroup!: FormGroup;
  public thirdFormGroup!: FormGroup;

  constructor(private _formBuilder: FormBuilder,
    private router: Router, private userService: UsersService) {
    this.firstFormGroup = this._formBuilder.group({

      nameCtrl: ['', Validators.required],
      lastnameCtrl: ['', Validators.required],
      documentCtrl: ['', Validators.required],
      emailCtrl: ['', Validators.email/* , Validators.email */],
      phoneCtrl: ['', Validators.required/* , Validators.max(9) */],
      rucCtrl: ['', Validators.required/* ,Validators.max(11) */]
    });
    this.secondFormGroup = this._formBuilder.group({
      direccionCtrl: ['', Validators.required],
      departmentCtrl: ['', Validators.required],
      provinceCtrl: ['', Validators.required],
      districtCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      passwordCtrl: ['', Validators.required/* , Validators.min(8) */],
      password1Ctrl: ['', Validators.required/* , Validators.min(8) */]
    });
  }


  ngOnInit() {
  }

  sendUser() {
    const firstForm = this.firstFormGroup.value;
    const secondForm = this.secondFormGroup.value;
    const thirdForm = this.thirdFormGroup.value;
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
    this.createUser(newObject);
    sessionStorage.setItem('user',JSON.stringify(newObject));
    /* this.goToLogin() */
  }

  createUser(obj: any) {
    this.userService.createUser(obj).then(() => {
      this.router.navigate(['/confirregister']);
    })
  }


  goToLogin() {
    this.router.navigate(['/home']);
    localStorage.removeItem('rol');
    sessionStorage.removeItem('user');
  }

}
