import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-requirement',
  templateUrl: './new-requirement.component.html',
  styleUrls: ['./new-requirement.component.scss']
})
export class NewRequirementComponent implements OnInit {

  tipoCarga = new FormControl();
  tipoCargaLista: string[] = ['Carga seca', 'Carga refrigerada', 'Carga húmeda', 'Carga de agregados', 'Otro'];

  detalleCarga = new FormControl();
  detalleCargaLista: string[] = ['Bolsas de cemento', 'Bolsas de rapimix', 'm2 de adoquines', 'Varillas de fierro 3/4', 'Otro'];

  cantidades = new FormControl();
  cantidadesLista: string[] = ['Bolsa de cemento', 'Bolsas de rapimix', 'Pedo total'];

  datosRecojo = new FormControl();
  datosRecojoLista: string[] = ['DinoEX-Piura', 'DinoEX-Chiclayo', 'DinoEX-Trujillo', 'DinoEX-Cajamarca'];

  datosDestino = new FormControl();
  datosDestinoLista: string[] = ['Chiclayo', 'Ferreñafe', 'Lambayeque', 'Dirección'];

  constructor() { }

  ngOnInit(): void {
  }

}
