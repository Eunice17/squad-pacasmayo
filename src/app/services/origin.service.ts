import { Injectable } from '@angular/core';
import { OriginI, DestinationI } from '../models/dinoex';

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

  private destiny: DestinationI[] = [
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

  getOrigin(): OriginI[]{
    return this.origin;
  }
  getDestiny(): DestinationI[]{
    return this.destiny;
  }
}
