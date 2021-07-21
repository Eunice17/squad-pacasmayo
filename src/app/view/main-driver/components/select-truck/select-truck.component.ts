import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-truck',
  templateUrl: './select-truck.component.html',
  styleUrls: ['./select-truck.component.scss']
})
export class SelectTruckComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  goConfirMess(){
    this.router.navigate(['./driver/confirdriver'])

  }
}
