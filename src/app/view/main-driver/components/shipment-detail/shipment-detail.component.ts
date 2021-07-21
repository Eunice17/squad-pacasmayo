import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipment-detail',
  templateUrl: './shipment-detail.component.html',
  styleUrls: ['./shipment-detail.component.scss']
})
export class ShipmentDetailComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  goBack(){
    this.router.navigate(['./driver/select'])
  }

}
