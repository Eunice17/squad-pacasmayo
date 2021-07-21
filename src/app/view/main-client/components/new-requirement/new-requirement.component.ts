import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OriginI, DestinationI, ProductI, TypeBulkI } from '../../../../models/dinoex';
import { RequirementService } from '../../../../services/requirement.service';

@Component({
  selector: 'app-new-requirement',
  templateUrl: './new-requirement.component.html',
  styleUrls: ['./new-requirement.component.scss']
})
export class NewRequirementComponent implements OnInit {

  public requirementForm: FormGroup;
  // cantidadLista: string[] = ['Bolsa de cemento', 'Bolsas de rapimix', 'Peso total'];

  tipoCargaControl = new FormControl('', [Validators.required]); 
  productoControl = new FormControl(''); 
  itemSeleccionadoControl = new FormControl('', [Validators.required]);
  dataRecojoControl = new FormControl('', [Validators.required]);
  dataDestinoControl = new FormControl('', [Validators.required]);
  dataOtroControl = new FormControl('');
  qtySelecControl = new FormControl('');
  qtyInputControl = new FormControl('');

  public selectedOrigin: OriginI = {id: '0', name: ''};
  public tiposCarga: TypeBulkI[]=[];
  public productos: ProductI[]=[];
  public recojos: OriginI[]=[];
  public destinos: DestinationI[]=[];
  public itemsSeleccionados: ProductI[]=[];
  public inputsOtro: any;
  public qtySelec: number=0;
  public qtyInput: number=0;

  constructor(
    private requirementService: RequirementService
  ) {
    this.requirementForm = new FormGroup({
      tipoCarga: this.tipoCargaControl, 
      producto: this.productoControl,
      itemSeleccionado: this.itemSeleccionadoControl,
      dataRecojo: this.dataRecojoControl,
      dataDestino: this.dataDestinoControl,
      inputOtro: this.dataOtroControl,
      qtySelec: this.qtySelecControl,
      qtyInput: this.qtyInputControl
    });
  }

  ngOnInit(): void {
    
    this.tiposCarga = this.requirementService.getTypeBulk();
    this.productos = this.requirementService.getBulk();
    this.recojos = this.requirementService.getOrigin();
    this.destinos = this.requirementService.getDestiny();
    
    this.productoControl.valueChanges.subscribe((value)=>{
      // console.log(value);
      this.itemsSeleccionados = value
    }) //este es un observable 

    this.dataRecojoControl.valueChanges.subscribe((value)=>{
      // console.log(this.detalleCargaControl.status);
      this.destinos = this.requirementService.getDestiny()
      .filter(item => item.originId === value);
    })//este es un observable

    this.requirementForm.valueChanges.subscribe((value)=>{
      console.log(value);  
    })
    this.requirementForm.statusChanges.subscribe((value)=>{
      console.log(value);
    })
  }

  mx(){

  }

  publish(){
    console.log(this.requirementForm.value);
    console.log(this.requirementForm.status)
    //extrae objeto json
    //creo un servicio de requestService
    // para publicar en la sgte pantalla
  }


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