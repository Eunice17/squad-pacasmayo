import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation-register',
  templateUrl: './confirmation-register.component.html',
  styleUrls: ['./confirmation-register.component.scss']
})
export class ConfirmationRegisterComponent implements OnInit {
  

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  goToNewTruck(){
    this.router.navigate(['/newtruck']);
  }

  goToMenuDriver(){
    this.router.navigate(['/driver']);
  }

}
