import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequirementService } from 'src/app/services/requirement.service';

@Component({
  selector: 'app-shipment-detail',
  templateUrl: './shipment-detail.component.html',
  styleUrls: ['./shipment-detail.component.scss']
})
export class ShipmentDetailComponent implements OnInit {

  requirementD:any
  productos: any

  constructor( private router: Router, 
    private requirementService: RequirementService) { 

    }

  ngOnInit(): void {
    
    this.getRequirementDetail('o9CqVojDwOwigpmICZiP');

  }

  getRequirementDetail(id: string){
    this.requirementService.getRequirement(id).subscribe((reqSnapshot)=>{
      console.log(reqSnapshot.payload.data());
      // console.log(reqSnapshot.payload.data().producto[0])
      this.requirementD= {
        id: reqSnapshot.payload.id,
        data: reqSnapshot.payload.data(),
      }

      
      
      console.log(this.requirementD.data)
    })
  }

  goBack(){
    this.router.navigate(['./driver/select'])
  }

}
