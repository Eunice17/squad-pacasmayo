import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TruckService } from 'src/app/services/truck.service';
import { RequirementService } from 'src/app/services/requirement.service';

@Component({
  selector: 'app-select-truck',
  templateUrl: './select-truck.component.html',
  styleUrls: ['./select-truck.component.scss']
})
export class SelectTruckComponent implements OnInit {
  trucks!: any;
  idUserConectado = JSON.parse(sessionStorage.getItem('user') || '').id;
  id$!: Observable<string>;
  idTemp: any
  idbuttontruck: any
  nameDriver: any

  constructor( private router: Router, private truckService: TruckService , private requirementService: RequirementService) { 
    this.id$ = this.requirementService.box$;
  }

  ngOnInit(): void {
    this.getId();
    this.getTrucks(this.idUserConectado)
 }
    getId(){
    this.id$.subscribe((data) => {
      console.log(data);
      this.idTemp = data;
    })
  }
  getTrucks(idUser: string){
    this.truckService.getTruckID(idUser).subscribe((truckSnapshot)=>{
      this.trucks = [];
      truckSnapshot.forEach((elem: any) =>{
        this.trucks.push({
          id: elem.payload.doc.id,
          capCarga: elem.payload.doc.data().capCarga,
          placa: elem.payload.doc.data().placa,
          tolvaForm: elem.payload.doc.data().tolvaForm,
          userId: elem.payload.doc.data().userId,
          nameDriver: elem.payload.doc.data().nameDriver
        });
      })
    })
  }

  getUpdateReq(id : string){
    const prueba = {
        status: "Aceptado",
        truck: this.idbuttontruck,
        driver:this.nameDriver
    }

    this.requirementService.requirementUpdate(id,prueba ).then(() => {
      console.log('Documento editado exitósamente');
  })
  }


  goConfirMess(){
    this.getUpdateReq(this.idTemp);
    this.router.navigate(['./driver/confirdriver'])
  }

  obtenerid(idtruck : any){
    this.idbuttontruck = idtruck
  } 
  obtenernameDriver(obtenernameDriver : any){
    this.nameDriver = obtenernameDriver
  } 
}
