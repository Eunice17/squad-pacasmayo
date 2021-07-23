import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main-client',
  templateUrl: './main-client.component.html',
  styleUrls: ['./main-client.component.scss']
})
export class MainClientComponent implements OnInit {



  constructor(private router: Router ) { }

  ngOnInit(): void {
  }


  goToNotfound(){
    this.router.navigate(['/notfound'])

  goToCreatRequirement(){
    this.router.navigate(['./newreq'])

  }

}
