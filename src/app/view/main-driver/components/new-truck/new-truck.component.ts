import { DIR_DOCUMENT_FACTORY } from '@angular/cdk/bidi/dir-document-token';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TruckService } from 'src/app/services/truck.service';

@Component({
  selector: 'app-new-truck',
  templateUrl: './new-truck.component.html',
  styleUrls: ['./new-truck.component.scss'],
})
export class NewTruckComponent implements OnInit {
  button_adi = false;
  button_pri = true;
  public requirementFormTruck!: FormGroup;

  tolva: string[] = ['Abierta', 'Cerrada'];
  tipo: string[] = ['D.N.I.', 'C.E.'];
  
  tarjetaPropiedad1 = new FormControl( "" , Validators.required); 
  tarjetaPropiedad2 = new FormControl( "" , Validators.required); 
  soat1 = new FormControl( "" ,Validators.required ); 
  soat2 = new FormControl( "" ,Validators.required ); 
  licenciaConducir1 = new FormControl( "", Validators.required); 
  licenciaConducir2 = new FormControl( "", Validators.required); 
  nameDriver = new FormControl( "", Validators.required); 
  docIdent = new FormControl("" ,[Validators.required, Validators.minLength(8)]); 
  tolvaForm = new FormControl( "", Validators.required ); 
  capCarga = new FormControl( '', [Validators.required, Validators.minLength(1)]); 
  placa = new FormControl("", Validators.required); 
  camposvacios= new FormControl(); 
  
  constructor(private truckService: TruckService) {
    this.requirementFormTruck = new FormGroup({
      tarjetaPropiedad1:this.tarjetaPropiedad1,
      tarjetaPropiedad2:this.tarjetaPropiedad2,
      soat1:this.soat1,
      soat2:this.soat2,
      licenciaConducir1:this.licenciaConducir1,
      licenciaConducir2:this.licenciaConducir2,
      nameDriver: this.nameDriver,
      docIdent: this.docIdent,
      tolvaForm: this.tolvaForm,
      capCarga: this.capCarga,
      placa: this.placa,
      camposvacios: this.camposvacios
    });
  }
/*   this.userId.setValue(JSON.parse(sessionStorage.getItem('user') || '').id)*/ 
  
  ngOnInit(): void {
     }
     public datosFormulario = new FormData();


  sendTruck(){
    const controlTruck= this.requirementFormTruck.value;

    const newObjectTruck = {
      tarjetaPropiedad1:controlTruck.tarjetaPropiedad1,
      tarjetaPropiedad2:controlTruck.tarjetaPropiedad2,
      soat1:controlTruck.soat1,
      soat2:controlTruck.soat2,
      licenciaConducir1:controlTruck.licenciaConducir1,
      licenciaConducir2:controlTruck.licenciaConducir2,
      nameDriver: controlTruck.nameDriver,
      docIdent: controlTruck.docIdent,
      tolvaForm: controlTruck.tolvaForm,
      capCarga: controlTruck.capCarga,
      placa: controlTruck.placa,
      userId: JSON.parse(sessionStorage.getItem('user') || '').id
    }
      this.truckService.createTruck(newObjectTruck).then(() => {
      console.log('Documento creado exitósamente!'); 
        const id= JSON.parse(sessionStorage.getItem('user') || '').id;

        let archivo1 = this.datosFormulario.get('tarjetaPropiedad1');
        let archivo2 = this.datosFormulario.get('tarjetaPropiedad2');
        let archivo3 = this.datosFormulario.get('soat1');
        let archivo4 = this.datosFormulario.get('soat2');
        let archivo5 = this.datosFormulario.get('licenciaConducir1');
        let archivo6 = this.datosFormulario.get('licenciaConducir2');

        this.truckService.tareaCloudStorage(`${id}TarjetaP01`+`${this.requirementFormTruck.value.tarjetaPropiedad1}`, archivo1);
        this.truckService.tareaCloudStorage(`${id}TarjetaP02`+`${this.requirementFormTruck.value.tarjetaPropiedad2}`, archivo2);
        this.truckService.tareaCloudStorage(`${id}Soat01`+`${this.requirementFormTruck.value.soat1}`, archivo3);
        this.truckService.tareaCloudStorage(`${id}Soat02`+`${this.requirementFormTruck.value.soat2}`, archivo4);
        this.truckService.tareaCloudStorage(`${id}LicenciaConducir01`+`${this.requirementFormTruck.value.licenciaConducir1}`, archivo5);
        this.truckService.tareaCloudStorage(`${id}LicenciaConducir02`+`${this.requirementFormTruck.value.licenciaConducir2}`, archivo6);
        
        this.requirementFormTruck.setValue({
          camposvacios:'',
          tarjetaPropiedad1: '',
          tarjetaPropiedad2: '',
          soat1: '',
          soat2: '',
          licenciaConducir1: '',
          licenciaConducir2: '',
          nameDriver: '',
          docIdent: '',
          tolvaForm: '',
          capCarga: '',
          placa:''
        });

        this.button_pri = false;
        this.button_adi = true;

      }, (error) => {
        console.error(error);
      });   
  } 
}
