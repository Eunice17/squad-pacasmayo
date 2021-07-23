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
    {id: 'P01',name: 'DinoEX-Piura'},
    {id: 'P02',name: 'DinoEX-Chiclayo'},
    {id: 'P03',name: 'DinoEX-Trujillo'},
    {id: 'PC01', name: "Amazonas"},
    {id: '2625', name: "Ancash"},
    {id: 'PC03', name: "Apurimac"},
    {id: '2450', name:"Arequipa"},
    {id:"3020",name:"Ayacucho"},
    {id:"3143",name:"Cajamarca"},
    {id: "453", name:"Cusco"},
    {id:"3414",name:"Huancavelica"},
    {id:"3518",name:"Huanuco",},{id:"3606",name:"Ica"},
    {id:"3655",name:"Junin"},
    {id:"3788",name:"La Libertad"},
    {id:"3884",name:"Lambayeque"},
    {id:"3926",name:"Lima"},{id:"4108",name:"Loreto"},
    {id:"4165",name:"Madre de Dios"},
    {id:"4180",name:"Moquegua"},
    {id:"4204",name:"Pasco"},
    {id:"4236",name:"Piura"},{id:"4309",name:"Puno"},
    {id:"4431",name:"San Martin"},
    {id:"4519",name:"Tacna"},
    {id:"4551",name:"Tumbes"},
    {id:"4567",name:"Ucayali"}
  ]
  private destination: DestinationI[] = [
    { id: 'D01', originId: 'P01',name: 'Piura'},
    {id: 'D02',originId: 'P01',name: 'Sullana'},
    {id: 'D03',originId: 'P02',name: 'Chiclayo'},
    {id: 'D04',originId: 'P02',name: 'Ferreñafe'},
    {id: 'D05',originId: 'P03',name: 'Trujillo'},
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

  getRequirementId(id: string){
    return this.firestore.collection('requirement').doc(id).snapshotChanges();
  }

  getRequirement() {
    return this.firestore.collection('requirement').snapshotChanges();
  }
  
  public requirementUpdate(id: string, prueba: any) {
    return this.firestore.collection('requirement').doc(id).update(prueba);
  }

}
