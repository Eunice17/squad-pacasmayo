import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation-register',
  templateUrl: './confirmation-register.component.html',
  styleUrls: ['./confirmation-register.component.scss']
})
export class ConfirmationRegisterComponent implements OnInit {
  show:boolean= true;
  rol = localStorage.getItem('rol')
  isRol = (this.rol === "true");

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    console.log(this.rol)
    console.log(typeof this.isRol)
    if(this.isRol === this.show){
      this.show= this.show
      console.log(this.show)
    } else{
      this.show = !this.show
      console.log(this.show)
    }
  }

  


  goToNewTruck(){
    this.router.navigate(['/driver/newtruck']);
  }

  goToMenuDriver(){
    this.router.navigate(['/driver']);
  }

  goToNewRequirement(){
    this.router.navigate(['/newreq']);
  }

  goToMenuClient(){
    this.router.navigate(['/client']);
  }

}
