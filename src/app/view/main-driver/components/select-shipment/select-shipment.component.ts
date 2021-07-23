import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RequirementService } from 'src/app/services/requirement.service';
@Component({
  selector: 'app-select-shipment',
  templateUrl: './select-shipment.component.html',
  styleUrls: ['./select-shipment.component.scss']
})
export class SelectShipmentComponent implements OnInit {
  shipments: any = [];
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
  publicado: any = [];
  constructor(private router: Router, private requirement: RequirementService) { }

  ngOnInit(): void {
    this.getRequirement();
    console.log(this.shipments);

  }

  getRequirement() {
    this.shipments = [];
    this.requirement.getRequirement().subscribe((value) => {
      value.forEach((val) => {
        this.shipments.push({
          id: val.payload.doc.id,
          data: val.payload.doc.data(),
        });
      })
      this.shipments = this.shipments.filter((val: any) => val.data.status == 'Publicado')
    });
  }
  more(id: string) {
    this.requirement.sendId(id);
    this.router.navigate(['./driver/shipdetail'])
  }
  goBack() {
    this.router.navigate(['./driver'])
  }
}
