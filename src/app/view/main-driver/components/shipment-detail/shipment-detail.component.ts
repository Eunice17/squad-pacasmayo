import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RequirementService } from '../../../../services/requirement.service';
import { RequirementD } from '../../../../models/dinoex';

@Component({
  selector: 'app-shipment-detail',
  templateUrl: './shipment-detail.component.html',
  styleUrls: ['./shipment-detail.component.scss']
})
export class ShipmentDetailComponent implements OnInit {
  id$: Observable<string>;

  // private subscriptions = new Subscription();

  requirementD: RequirementD= {
    id:'',
    data: {
      dataRecojo: {}
    }
  }
  // productos: any

  idTemp: any

  constructor( private router: Router, 
    private requirementService: RequirementService) { 
      this.id$ = this.requirementService.box$;
      // this.getId();
      // console.log(this.idTemp)
      // this.getRequirementDetail(this.idTemp)
    }

  ngOnInit(): void {
   this.getId();
   console.log(this.idTemp)
   this.getRequirementDetail(this.idTemp)
  //  this.subscriptions.add(this.requirementService.sendId().subscribe( => this.heroes = heroes));
    
  }


  getId(){
  this.id$.subscribe((data) => {
    console.log(data);
    this.idTemp = data;
  })
}

  getRequirementDetail(id: string){
    this.requirementService.getRequirementId(id).subscribe((reqSnapshot)=>{
      console.log(reqSnapshot.payload.data);
      // console.log(reqSnapshot.payload.data().producto[0])
      this.requirementD= {
        id: reqSnapshot.payload.id,
        data: reqSnapshot.payload.data(),
      }
      console.log(this.requirementD)
    })
  }

  goToSelect(id: any){
    console.log('acepta', id)
    this.requirementService.sendId(id);
    this.router.navigate(['/driver/select'])
  }

  goBack() {
    this.router.navigate(['/driver/shipment'])
  }


}

