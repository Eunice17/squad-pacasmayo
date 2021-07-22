import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TruckService } from 'src/app/services/truck.service';

@Component({
  selector: 'app-select-truck',
  templateUrl: './select-truck.component.html',
  styleUrls: ['./select-truck.component.scss']
})
export class SelectTruckComponent implements OnInit {

  constructor( private router: Router, private truckService: TruckService) { }

  ngOnInit(): void {
  }
  getTrucks(idUser: string){
    this.truckService.getTruckID(idUser).subscribe((truckSnapshot)=>{
      
      console.log(truckSnapshot);
      truckSnapshot.forEach((elem: any) =>{
        console.log(elem.payload.doc.id);
        //console.log(elem.payload.doc.data());
        
        
      })


    })
  }

  goConfirMess(){
    this.router.navigate(['./driver/confirdriver'])
  }
}
