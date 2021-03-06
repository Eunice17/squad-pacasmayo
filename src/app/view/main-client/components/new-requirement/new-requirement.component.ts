import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OriginI, DestinationI, ProductI, TypeBulkI } from '../../../../models/dinoex';
import { RequirementService } from '../../../../services/requirement.service';
import { formatDate } from '@angular/common';
import { LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-new-requirement',
  templateUrl: './new-requirement.component.html',
  styleUrls: ['./new-requirement.component.scss']
})
export class NewRequirementComponent implements OnInit {
  public tiposCarga: TypeBulkI[]=[];
  public recojos: OriginI[]=[];
  public destinos: DestinationI[]=[];
  public itemsSeleccionados: ProductI[]=[];
  public requirementForm: FormGroup;

  pesoTotalPedido!: any;
  pesoTn!: number;
  productos!: any;
  ctd!: any;
  array!: any;
  today= new Date();
  jstoday = '';


  tipoCargaControl = new FormControl('', [Validators.required]); 
  productoControl = new FormControl('',[Validators.required]); 
  cantidadesControl = new FormArray([],[Validators.required]);
  dataRecojoControl = new FormControl('', [Validators.required]);
  direccionRecojoControl = new FormControl('', [Validators.required]);
  dataDestinoControl = new FormControl('', [Validators.required]);
  direccionControl = new FormControl('', [Validators.required]);
  nombreControl = new FormControl('', [Validators.required]);
  celularControl = new FormControl('', [Validators.required, Validators.maxLength(9), Validators.minLength(9)]);
  horaDespachoControl = new FormControl('', [Validators.required]);
  montoTotalControl = new FormControl('', [Validators.required, Validators.min(1)]);

  constructor(
    private requirementService: RequirementService,
    private router: Router,
  ) {
    this.requirementForm = new FormGroup({
      tipoCarga: this.tipoCargaControl, 
      cantidadesControl: this.cantidadesControl,
      dataRecojo: this.dataRecojoControl,
      direccionOrigen: this.direccionRecojoControl,
      dataDestino: this.dataDestinoControl,
      direccionDestino: this.direccionControl,
      nombre: this.nombreControl,
      celular: this.celularControl,
      horaDespacho: this.horaDespachoControl,
      montoTotal: this.montoTotalControl,
    });
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US');
  }

  ngOnInit(): void {
    this.tiposCarga = this.requirementService.getTypeBulk();
    this.requirementService.getBulk().subscribe((productsSnapshot)=>{
      this.productos = [];
      productsSnapshot.forEach((data: any) => {
        this.productos.push({
          id: data.payload.doc.id,
          data: data.payload.doc.data(),
          name: data.payload.doc.data().name,
          weight: data.payload.doc.data().weight
        })
      });      
    });
    this.recojos = this.requirementService.getOrigin();
    this.destinos = this.requirementService.getDestiny();
    this.productoControl.valueChanges.subscribe((value)=>{
    this.itemsSeleccionados = value;
    this.cantidadesControl.push(new FormControl('', [Validators.required]))
    })

    this.dataRecojoControl.valueChanges.subscribe((value)=>{
    this.destinos = this.requirementService.getDestiny()
    .filter(item => item.originId === value.id);
    })

    this.cantidadesControl.valueChanges.subscribe((value)=>{
    this.ctd=[...value];
    this.pesoTotalPedido=0;
    for (let i = 0; i < value.length; i++) {
      const cantidad = Number(value[i]);
      this.itemsSeleccionados[i].qty=cantidad;
      this.itemsSeleccionados[i].weightTotal=cantidad*this.itemsSeleccionados[i].weight;
      this.pesoTotalPedido = this.pesoTotalPedido + this.itemsSeleccionados[i].weightTotal;
    }
    this.pesoTn=this.pesoTotalPedido/1000;
    })
  }

  publishOrder(){    
    const request = {
    ...this.requirementForm.value,
    producto: this.productoControl.value.map((value: any, index: any)=>{
      return {
        ...value, 
        qty: Number(this.cantidadesControl.get(`${index}`)?.value)
      }
    }),
    weightTotal: this.pesoTn,
    driver:"",
    status:"",
    truck:"",
    userId: JSON.parse(sessionStorage.getItem('user') || '').id,
    date: this.jstoday
    }
    this.requirementService.publishOrder(request);
    this.router.navigate(['./order'])
  }
}
