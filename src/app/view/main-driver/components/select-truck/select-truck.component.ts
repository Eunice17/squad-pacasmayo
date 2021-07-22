import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TruckService } from 'src/app/services/truck.service';

@Component({
  selector: 'app-select-truck',
  templateUrl: './select-truck.component.html',
  styleUrls: ['./select-truck.component.scss']
})
export class SelectTruckComponent implements OnInit {
  trucks!: any;
  idUserConectado = JSON.parse(sessionStorage.getItem('user') || '').id;
  constructor( private router: Router, private truckService: TruckService) { }

  ngOnInit(): void {
    this.getTrucks(this.idUserConectado)
  }
  getTrucks(idUser: string){
    this.truckService.getTruckID(idUser).subscribe((truckSnapshot)=>{
      this.trucks = [];
      truckSnapshot.forEach((elem: any) =>{
/*      console.log(elem.payload.doc.id);
        console.log(elem.payload.doc.data().placa); */
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

  goConfirMess(){
    this.router.navigate(['./driver/confirdriver'])
  }
  
  obtenerid(idtruck : any){
    console.log(idtruck)
   
  }

}
