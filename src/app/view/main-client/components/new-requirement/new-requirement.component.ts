import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OriginI, DestinationI, BulkI } from '../../../../models/dinoex';
import { OriginService } from '../../../../services/origin.service';

@Component({
  selector: 'app-new-requirement',
  templateUrl: './new-requirement.component.html',
  styleUrls: ['./new-requirement.component.scss']
})
export class NewRequirementComponent implements OnInit {

  public requirementForm: FormGroup;
  typeBulkList: string[] = ['Carga seca', 'Carga refrigerada', 'Carga húmeda', 'Carga de agregados', 'Otro'];
  detailBulkList: string[] = ['Bolsas de cemento', 'Bolsas de rapimix', 'm2 de adoquines', 'Varillas de fierro 3/4', 'Otro'];
  quantityList: string[] = ['Bolsa de cemento', 'Bolsas de rapimix', 'Peso total'];
  // se
  typeBulkControl = new FormControl(); 
  detailBulkControl = new FormControl('', [Validators.required]); 
  quantityControl = new FormControl();
  dataOriginControl = new FormControl();
  dataDestinationControl = new FormControl('', [Validators.required]);

  public selectedOrigin: OriginI = {id: '0', name: ''};
  public origins: OriginI[]=[];
  public destinations: DestinationI[]=[];
  public detailBulks: BulkI[]=[];

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

    this.requirementForm.valueChanges.subscribe((value)=>{
      console.log(value);
      
    })
    this.requirementForm.statusChanges.subscribe((value)=>{
      console.log(value);
      
    })
    this.detailBulkControl.valueChanges.subscribe((id)=>{
      console.log(id);
      this.destinations = this.originService.getDestiny()
      .filter(item => item.originId === id);
      
    }) //este es un observable 
    this.dataOriginControl.valueChanges.subscribe((value)=>{
      console.log(this.detailBulkControl.status);
      this.destinations = this.originService.getDestiny()
      .filter(item => item.originId === value);
    })//este es un observable
    this.destinations = this.originService.getDestiny();
    this.detailBulks = this.originService.getBulk();
  }

  //ngOnDestroy como mejora--> desuscribe de todo para evitar la fuga de memoria

  // onSelectOrigin(id: string): void{
  //   // console.log(id);
  //   this.destinations = this.originService.getDestiny()
  //   .filter(item => item.originId === id);
  // }

  // onSelectBulk(id: string){

  //   // aquí llamo al servicio
  //   // y ese arreglo filtro
  // }

  publish(){
    console.log(this.requirementForm.value);
    console.log(this.requirementForm.status)
    //extrae objeto json
    //creo un servicio de requestService
    // para publicar en la sgte pantalla
  }


}
