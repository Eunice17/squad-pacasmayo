import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDriverComponent } from './view/main-driver/main-driver.component';

const routes: Routes = [
  {path: 'driver', component: MainDriverComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
