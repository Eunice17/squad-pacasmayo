import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout'
import {Observable} from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
 isHandset: Observable<BreakpointState> =this.breakpointObserver.observe(Breakpoints.Handset)

 constructor(private breakpointObserver:BreakpointObserver, private router: Router ) { }

  ngOnInit(): void {
  }

  logOut(){
    localStorage.removeItem('rol');
    sessionStorage.removeItem('user');
    this.router.navigate(['/home'])
  }
}
