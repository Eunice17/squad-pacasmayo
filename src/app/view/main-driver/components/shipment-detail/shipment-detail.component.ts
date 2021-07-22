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

  constructor(private router: Router, private requirementServices: RequirementService) {
    this.id$ = this.requirementServices.box$;
  }

  ngOnInit(): void {
    this.id$.subscribe((data) => {
      console.log(data);
    });
  }

  goBack() {
    this.router.navigate(['./driver/select'])
  }

}
