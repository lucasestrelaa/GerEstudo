import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Revisao } from '../interfaces/revisao';

@Injectable({
  providedIn: 'root',
})
export class RevisaoService {
  private revisaoCollection: AngularFirestoreCollection<Revisao>;
  //private bannerCollection: AngularFirestoreDocument<Banner>;
  public revisao: Revisao = {};
  public revisoes: Revisao = {};
  constructor(private afs: AngularFirestore) {
    this.revisaoCollection = this.afs.collection<Revisao>('Revisao');
  }
  getRevisoes() {
    return this.revisaoCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return { id, ...data };
        });
      })
    );
  }
  addRevisao(revisao: Revisao) {
    return this.revisaoCollection.add(revisao);
  }
  getRevisao(id: string) {
    return this.revisaoCollection.doc<Revisao>(id).valueChanges();
  }

  updateRevisao(id: string, revisao: Revisao) {
    return this.revisaoCollection.doc<Revisao>(id).update(revisao);
  }

  deleteRevisao(id: string) {
    return this.revisaoCollection.doc(id).delete();
  }
}
