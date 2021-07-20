import { Injectable } from '@angular/core';
import { OriginI, DestinationI, BulkI } from '../models/dinoex';

@Injectable({
  providedIn: 'root'
})
export class OriginService {

  private origin: OriginI[] = [
    {
      id: 'P01',
      name: 'DinoEX-Piura'
    },
    {
      id: 'P02',
      name: 'DinoEX-Chiclayo'
    },
    {
      id: 'P03',
      name: 'DinoEX-Trujillo'
    }
  ]

  private destination: DestinationI[] = [
    {
      id: 'D01',
      originId: 'P01',
      name: 'Piura'
    },
    {
      id: 'D02',
      originId: 'P01',
      name: 'Sullana'
    },
    {
      id: 'D03',
      originId: 'P02',
      name: 'Chiclayo'
    },
    {
      id: 'D04',
      originId: 'P02',
      name: 'Ferreñafe'
    },
    {
      id: 'D05',
      originId: 'P03',
      name: 'Trujillo'
    },
    {
      id: 'D06',
      originId: 'P03',
      name: 'Huanchaco'
    }
  ]

  private bulk: BulkI[] = [
    {
      id: 'BCEM01',
      name: 'Bolsa de cemento'
    },
    {
      id: 'BRAP02',
      name: 'Bolsa de rapimix'
    },
    {
      id: 'MADOQ03',
      name: 'M2 de adoquines'
    },
    {
      id: 'VFIE04',
      name: 'Varillas de fierro 3/4'
    }
  ]

  constructor() { }

  // setStepInfo(){
  //   //para Gaby
  // }

  // getStepInfo(){
  //   // obtener valor del form registro
  // }

  getOrigin(): OriginI[]{
    return this.origin;
  }
  getDestiny(): DestinationI[]{
    return this.destination;
  }
  getBulk(): BulkI[]{
    return this.bulk;
  }
}
