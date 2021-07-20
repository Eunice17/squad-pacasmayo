import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserI } from '../models/users'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private firestore: AngularFirestore) { }


  public createUser(data: UserI){
    return this.firestore.collection('users').add(data);
  }

}
