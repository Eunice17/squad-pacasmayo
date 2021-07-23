import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RequirementI } from '../../../../models/dinoex';
import { RequirementService } from '../../../../services/requirement.service';

@Component({
  selector: 'app-requirement-detail',
  templateUrl: './requirement-detail.component.html',
  styleUrls: ['./requirement-detail.component.scss']
})
export class RequirementDetailComponent implements OnInit {

  orders$:Observable<RequirementI[]>;
  itemList: any;

  constructor(
    private router: Router, 
    private requirementService: RequirementService) { 
      this.orders$=this.requirementService.cart$;
    }

  ngOnInit(): void {
    this.orders$.subscribe((el)=> {
      this.itemList=[]
      this.itemList=el
    });
  }

  createOrder(request: RequirementI){
    request.status= "Publicado";
    this.requirementService.createRequirement(request).then((value)=>{
      this.requirementService.sendId(value.id)
      this.router.navigate(['./waiting'])
    }); 
  }

  goBack(){
    this.router.navigate(['./newreq']) 
  }
}
