import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OriginI, DestinationI } from '../../../../models/dinoex';
import { OriginService } from '../../../../services/origin.service';


interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-new-requirement',
  templateUrl: './new-requirement.component.html',
  styleUrls: ['./new-requirement.component.scss']
})
export class NewRequirementComponent implements OnInit {

  form: FormGroup;
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  cars: Car[] = [
    {value: 'volvo', viewValue: 'Volvo'},
    {value: 'saab', viewValue: 'Saab'},
    {value: 'mercedes', viewValue: 'Mercedes'}
  ];
  foodControl = new FormControl(this.foods[2].value);
  carControl = new FormControl(this.cars[1].value);


  public selectedOrigin: OriginI = {id: '0', name: ''};
  public origins: OriginI[]=[];
  public destinations: DestinationI[]=[];


  tipoCargaLista: string[] = ['Carga seca', 'Carga refrigerada', 'Carga húmeda', 'Carga de agregados', 'Otro'];
  detalleCargaLista: string[] = ['Bolsas de cemento', 'Bolsas de rapimix', 'm2 de adoquines', 'Varillas de fierro 3/4', 'Otro'];
  cantidadesLista: string[] = ['Bolsa de cemento', 'Bolsas de rapimix', 'Pedo total'];

  tipoCarga = new FormControl(this.tipoCargaLista.values);

  detalleCarga = new FormControl(this.detalleCargaLista.values); 

  cantidades = new FormControl();
  

  dataOrigin = new FormControl();
  dataDestination = new FormControl();


  constructor(
    private originService: OriginService
  ) {
    this.form = new FormGroup({
      food: this.foodControl,
      car: this.carControl
    });
  }
  

  ngOnInit(): void {
    this.origins = this.originService.getOrigin();
    this.destinations = this.originService.getDestiny();
  }

  onSelect(id: string): void{
    // console.log(id);
    this.destinations = this.originService.getDestiny()
    .filter(item => item.originId === id);
  }

}
