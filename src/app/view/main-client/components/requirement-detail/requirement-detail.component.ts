import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requirement-detail',
  templateUrl: './requirement-detail.component.html',
  styleUrls: ['./requirement-detail.component.scss']
})
export class RequirementDetailComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goBack(){
    this.router.navigate(['./newreq'])
  }
}
