import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequirementService } from '../../../../services/requirement.service';

@Component({
  selector: 'app-waiting-driver',
  templateUrl: './waiting-driver.component.html',
  styleUrls: ['./waiting-driver.component.scss']
})
export class WaitingDriverComponent implements OnInit {

  constructor(private requirementService: RequirementService,
    private router: Router,) { }

  ngOnInit(): void {
    this.requirementService.box$.subscribe((id)=>{
      this.requirementService.getRequirementId(id).subscribe((el)=>{
          if (el.type==="modified") {
            this.router.navigate(['./messageclient'])
          } 
      })  
    })
  }
}
