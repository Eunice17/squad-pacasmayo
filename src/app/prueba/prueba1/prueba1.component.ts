import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TruckService } from '../../../app/services/truck.service';

@Component({
  selector: 'app-prueba1',
  templateUrl: './prueba1.component.html',
  styleUrls: ['./prueba1.component.scss']
})
export class Prueba1Component implements OnInit {

  constructor(private firebaseStorage: TruckService) { }

  ngOnInit(): void {
  }
  
  public archivoForm = new FormGroup({
    archivo: new FormControl(null, Validators.required),
    archivo2: new FormControl(null, Validators.required),
  });
  
  public datosFormulario = new FormData();
  
  public nombreArchivo = '';
  
  //Evento que se gatilla cuando el input de tipo archivo cambia
  public cambioArchivo(event : any) {
    for (let i = 0; i < event.target.files.length; i++) {
      this.nombreArchivo = event.target.files[i].name;
      this.datosFormulario.delete('archivo');
      this.datosFormulario.append('archivo', event.target.files[i], event.target.files[i].name)

      }

  } 
   //Sube el archivo a Cloud Storage
   public subirArchivo() {
    let archivo = this.datosFormulario.get('archivo');
    let tarea = this.firebaseStorage.tareaCloudStorage(this.nombreArchivo, archivo);

    let archivo2 = this.datosFormulario.get('archivo2');
    let tarea2 = this.firebaseStorage.tareaCloudStorage('prueba1', archivo2);
  }
}
