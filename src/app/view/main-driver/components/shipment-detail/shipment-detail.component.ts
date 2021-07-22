import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RequirementService } from 'src/app/services/requirement.service';

@Component({
  selector: 'app-shipment-detail',
  templateUrl: './shipment-detail.component.html',
  styleUrls: ['./shipment-detail.component.scss']
})
export class ShipmentDetailComponent implements OnInit {
  id$: Observable<string>;

  requirementD:any
  productos: any

  constructor( private router: Router, 
    private requirementService: RequirementService) { 
      this.id$ = this.requirementService.box$;
    }

  ngOnInit(): void {
    this.id$.subscribe((data) => {
      console.log(data);
      // this.getRequirementDetail(data);
    })
    
  }

  getRequirementDetail(id: string){
    this.requirementService.getRequirementId(id).subscribe((reqSnapshot)=>{
      console.log(reqSnapshot.payload.data());
      // console.log(reqSnapshot.payload.data().producto[0])
      this.requirementD= {
        id: reqSnapshot.payload.id,
        data: reqSnapshot.payload.data(),
      }
      
      console.log(this.requirementD.data)
    })
  }

  goBack() {
    this.router.navigate(['./driver/select'])
  }

}
