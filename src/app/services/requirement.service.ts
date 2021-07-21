import { Injectable } from '@angular/core';
import { OriginI, DestinationI, ProductI, TypeBulkI } from '../models/dinoex';

@Injectable({
  providedIn: 'root'
})
export class RequirementService {
  private typeBulk: TypeBulkI[] = [
    {
      id: 'TC01',
      name: 'Carga seca'
    },
    {
      id: 'TC02',
      name: 'Carga refrigerada'
    },
    {
      id: 'TC03',
      name: 'Carga húmeda'
    },
    {
      id: 'TC04',
      name: 'Carga de agregados'
    }
  ]
  private bulk: ProductI[] = [
    {
      id: 'BCEM01',
      name: 'Bolsa de cemento',
      weight: 42.5
    },
    {
      id: 'BRAP02',
      name: 'Bolsa de rapimix',
      weight: 23
    },
    {
      id: 'MADOQ03',
      name: 'M2 de adoquines',
      weight: 48
    },
    {
      id: 'VFIE04',
      name: 'Varillas de fierro 3/4',
      weight: 49
    }
  ]
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

  constructor() { }

  getTypeBulk(): TypeBulkI[]{
    return this.typeBulk;
  }
  getBulk(): ProductI[]{
    return this.bulk;
  }
  getOrigin(): OriginI[]{
    return this.origin;
  }
  getDestiny(): DestinationI[]{
    return this.destination;
  }
  
}
// setStepInfo(){
  //   //para Gaby
  // }

  // getStepInfo(){
  //   // obtener valor del form registro
  // }