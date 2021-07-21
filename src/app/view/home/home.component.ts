import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isDriver: boolean= false;
  constructor(
    private router: Router,
  ) {  }

  ngOnInit(): void {
  }

  goLoginViewDriver(){
    let rol= "true"
    localStorage.setItem('rol', rol );
    this.router.navigate(['./login'])
  }

  goLoginViewClient(){
    let rol="false"
    localStorage.setItem('rol', rol );
    this.router.navigate(['./login'])
  }

}
