import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Truck } from '../models/truck';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class TruckService {

  constructor(private firestore: AngularFirestore,  private storage: AngularFireStorage) { }

  public createTruck(data: Truck){
    return this.firestore.collection('truck').add(data);
  }

  //Tarea para subir archivo
  public tareaCloudStorage(nombreArchivo: string, datos: any) {
    return this.storage.upload(nombreArchivo, datos);
  }

  public getTruckID(userid:string){
    return this.firestore.collection('truck', ref => ref.where('userId', '==', userid))
    .snapshotChanges();
  }

  public getTruckIDTruck(id:string){
    return this.firestore.collection('truck', ref => ref.where('id', '==', id))
    .snapshotChanges();
  }
  public getTruckId(id: string) {
    return this.firestore.collection('truck').doc(id).snapshotChanges();
}

  public updateT(id: string, data: any) {
    return this.firestore.collection('truck').doc(id).set(data);
  }
}