import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Truck } from '../models/truck';

@Injectable({
  providedIn: 'root'
})
export class TruckService {

  constructor(private firestore: AngularFirestore) { }

  public createTruck(data: Truck){
    return this.firestore.collection('truckprueba').add(data);
  }
}
