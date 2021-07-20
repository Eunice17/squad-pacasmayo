import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TruckService } from 'src/app/services/truck.service';

@Component({
  selector: 'app-new-truck',
  templateUrl: './new-truck.component.html',
  styleUrls: ['./new-truck.component.scss'],
})
export class NewTruckComponent implements OnInit {
  public requirementFormTruck!: FormGroup;

  tolva: string[] = ['Abierta', 'Cerrada'];
  tipo: string[] = ['D.N.I.', 'C.E.'];
  
  tarjetaPropiedad = new FormControl("", Validators.required); 
  soat = new FormControl("", Validators.required); 
  licenciaConducir = new FormControl("", Validators.required); 
  nameDriver = new FormControl("", Validators.required); 
  docIdent = new FormControl("", [Validators.required, Validators.minLength(8)]); 
  tolvaForm = new FormControl("", Validators.required); 
  capCarga = new FormControl('', [Validators.required, Validators.minLength(1)]); 

  constructor(private truckService: TruckService) {
    this.requirementFormTruck = new FormGroup({
      tarjetaPropiedad:this.tarjetaPropiedad,
      soat:this.soat,
      licenciaConducir:this.licenciaConducir,
      nameDriver: this.nameDriver,
      docIdent: this.docIdent,
      tolvaForm: this.tolvaForm,
      capCarga: this.capCarga,
    });
   }

  ngOnInit(): void {
    this.requirementFormTruck;
     }
 

  sendTruck(form: any){
      this.truckService.createTruck(form).then(() => {
        console.log('Documento creado exitósamente!');
        this.requirementFormTruck.setValue({
          tarjetaPropiedad: '',
          soat: '',
          licenciaConducir: '',
          nameDriver: '',
          docIdent: '',
          tolvaForm: '',
          capCarga: ''
        });
      }, (error) => {
        console.error(error);
      });   
  }
}