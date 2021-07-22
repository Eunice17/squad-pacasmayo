import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OriginI, DestinationI, ProductI, TypeBulkI } from '../../../../models/dinoex';
import { RequirementService } from '../../../../services/requirement.service';

@Component({
  selector: 'app-new-requirement',
  templateUrl: './new-requirement.component.html',
  styleUrls: ['./new-requirement.component.scss']
})
export class NewRequirementComponent implements OnInit {
  public selectedOrigin: OriginI = {id: '0', name: ''};
  public tiposCarga: TypeBulkI[]=[];
  public recojos: OriginI[]=[];
  public destinos: DestinationI[]=[];
  public itemsSeleccionados: ProductI[]=[];
  public requirementForm: FormGroup;

  pesoTotalPedido!: any;
  productos!: any;
  ctd!: any;
  array!: any;

  tipoCargaControl = new FormControl('', [Validators.required]); 
  productoControl = new FormControl(''); 
  cantidadesControl = new FormArray([]);
  dataRecojoControl = new FormControl('', [Validators.required]);
  dataDestinoControl = new FormControl('', [Validators.required]);
  direccionControl = new FormControl('', [Validators.required]);
  nombreControl = new FormControl('', [Validators.required]);
  celularControl = new FormControl('', [Validators.required]);
  horaDespachoControl = new FormControl('', [Validators.required]);
  montoTotalControl = new FormControl('', [Validators.required]);

  constructor(
    private requirementService: RequirementService,
    private router: Router,
  ) {
    this.requirementForm = new FormGroup({
      tipoCarga: this.tipoCargaControl, 
      cantidadesControl: this.cantidadesControl,
      dataRecojo: this.dataRecojoControl,
      dataDestino: this.dataDestinoControl,
      direccion: this.direccionControl,
      nombre: this.nombreControl,
      celular: this.celularControl,
      horaDespacho: this.horaDespachoControl,
      montoTotal: this.montoTotalControl,
    });
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
      .filter(item => item.originId === value);
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
    })
  }

  publishOrder(){       
    const request = {
      ...this.requirementForm.value,
      producto: this.productoControl.value.map((value: any, index: any)=>{
        console.log(value);
        return {
          ...value, 
          qty: Number(this.cantidadesControl.get(`${index}`)?.value)
        }
      }),
      weightTotal: this.pesoTotalPedido,
      driver:"",
      status:"Pending",
      truck:"",
      userId: JSON.parse(sessionStorage.getItem('user') || '').id
    }

    this.requirementService.publishOrder(request);
    this.requirementService.createRequirement(request);
    console.log(request);
    this.router.navigate(['./order'])
  }
}
//ngOnDestroy como mejora--> desuscribe de todo para evitar la fuga de memoria
