import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OriginI, DestinationI } from '../../../../models/dinoex';
import { OriginService } from '../../../../services/origin.service';

@Component({
  selector: 'app-new-requirement',
  templateUrl: './new-requirement.component.html',
  styleUrls: ['./new-requirement.component.scss']
})
export class NewRequirementComponent implements OnInit {

  requirementForm: FormGroup;
  typeBulkList: string[] = ['Carga seca', 'Carga refrigerada', 'Carga húmeda', 'Carga de agregados', 'Otro'];
  detailBulkList: string[] = ['Bolsas de cemento', 'Bolsas de rapimix', 'm2 de adoquines', 'Varillas de fierro 3/4', 'Otro'];
  quantityList: string[] = ['Bolsa de cemento', 'Bolsas de rapimix', 'Peso total'];

  typeBulkControl = new FormControl(this.typeBulkList.values);
  detailBulkControl = new FormControl(this.detailBulkList.values); 
  quantityControl = new FormControl(this.quantityList.values);
  dataOriginControl = new FormControl();
  dataDestinationControl = new FormControl();

  public selectedOrigin: OriginI = {id: '0', name: ''};
  public origins: OriginI[]=[];
  public destinations: DestinationI[]=[];

  constructor(
    private originService: OriginService
  ) {
    this.requirementForm = new FormGroup({
      typeBulk: this.typeBulkControl,
      detailBulk: this.detailBulkControl,
      quantity: this.quantityControl,
      dataOtigin: this.dataOriginControl,
      dataDestination: this.dataDestinationControl
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
