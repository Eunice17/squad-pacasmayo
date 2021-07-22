import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-select-shipment',
  templateUrl: './select-shipment.component.html',
  styleUrls: ['./select-shipment.component.scss']
})
export class SelectShipmentComponent implements OnInit {
  ciudad = ['All', 'Chiclayo', 'Ferreñafe',
    'Lambayaque', 'Morropón', 'Ayabaca',
    'Huancabamba', 'Paita', 'Piura',
    'Sullana', 'Talara', 'Sechura',
    'Trujillo', 'Chanchan', 'Escalada',
    'Laredo', 'Chicago', 'Salaverry',
    'Cajabamba', 'Cajamarca', 'Calendín', 'Chota',
    'Contumazá', 'Cutervo', 'Hualgayoc', 'Jaén', 'San Ignacio',
    'San Miguel', 'Santa Cruz', 'San Marcos', 'San Pablo'];
  city = new FormControl('', [Validators.required]);
  constructor() { }

  ngOnInit(): void {
  }

}
