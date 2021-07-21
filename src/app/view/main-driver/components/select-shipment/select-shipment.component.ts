import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-select-shipment',
  templateUrl: './select-shipment.component.html',
  styleUrls: ['./select-shipment.component.scss']
})
export class SelectShipmentComponent implements OnInit {
  ciudad = ['All', 'Piura', 'Trujillo'];
  constructor() { }

  ngOnInit(): void {
  }

}
