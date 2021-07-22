import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requirement-detail',
  templateUrl: './requirement-detail.component.html',
  styleUrls: ['./requirement-detail.component.scss']
})
export class RequirementDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  goBack(){
    console.log('back to select shipment')
  }
}
