import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { OriginI, DestinationI, ProductI, TypeBulkI, RequirementI } from '../models/dinoex';

@Injectable({
  providedIn: 'root'
})
export class RequirementService {
  
  orders: RequirementI[] = []
  private cart = new BehaviorSubject<Array<RequirementI>>([]);
  cart$ = this.cart.asObservable();
  publishOrder(order: RequirementI) {
    this.orders = [...this.orders, order]
    this.cart.next(this.orders)
  }

  id: string = ''
  private box = new BehaviorSubject<string>('');
  box$ = this.box.asObservable();
  sendId(id: string) {
    this.id = id;
    this.box.next(this.id);
  }


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

  constructor(private firestore: AngularFirestore) { }

  getTypeBulk(): TypeBulkI[] {
    return this.typeBulk;
  }
  public getBulk(): Observable<any> {
    return this.firestore.collection('product').snapshotChanges();
  }
  getOrigin(): OriginI[] {
    return this.origin;
  }
  getDestiny(): DestinationI[] {
    return this.destination;
  }
  createRequirement(data: any) {
    return this.firestore.collection('requirement').add(data);
  }

  getRequirement() {
    return this.firestore.collection('requirement').snapshotChanges();
  }


}
