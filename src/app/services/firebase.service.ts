import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private firestore: AngularFirestore
  ) { }

 public crear(pedro: any) {
   return this.firestore.collection('datos').add(pedro);

 }
  public tomar(datos: any) {
   return this.firestore.collection('datos').snapshotChanges();
 }

   public tomartodo() {
   return this.firestore.collection('datos').snapshotChanges();
 }

   public actualizar(documentId: string, data: any, collection: string) {
   return this.firestore.collection(collection).doc(documentId).set({ data }, { merge: true });
 }
}