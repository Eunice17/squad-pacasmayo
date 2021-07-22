import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RequirementI } from 'src/app/models/dinoex';
import { RequirementService } from 'src/app/services/requirement.service';

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
      console.log(this.itemList);
      console.log(this.itemList[0].producto);
      
    });
  }

  goBack(){
    this.router.navigate(['./newreq'])
  }
}
