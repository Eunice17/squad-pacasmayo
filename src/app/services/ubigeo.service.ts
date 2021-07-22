import { Injectable } from '@angular/core';
import { DepartamentoI, ProvinciaI, DistritoI } from '../models/ubigeo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UbigeoService {
 

  constructor(private http:HttpClient) { }

  getDepartamentos():Observable <DepartamentoI[]>{
    return this.http.get<DepartamentoI[]>('src/app/services/data/departamentos.json')
  }

  // getProvincias(): ProvinciaI[]{
  //   return this.provincias;
  // }



}
