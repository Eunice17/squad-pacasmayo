import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-driver',
  templateUrl: './menu-driver.component.html',
  styleUrls: ['./menu-driver.component.scss']
})
export class MenuDriverComponent implements OnInit {
  name!: any;
  constructor() { }

  ngOnInit(): void {
    let json: any = sessionStorage.getItem('user');
    this.name = JSON.parse(json);
  }
}
