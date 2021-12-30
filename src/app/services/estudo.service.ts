import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Estudo } from '../interfaces/estudo';


@Injectable({
  providedIn: 'root',
})
export class EstudoService {
  private conteudosCollection: AngularFirestoreCollection<Estudo>;
  //private bannerCollection: AngularFirestoreDocument<Banner>;
  public conteudo: Estudo = {};
  public conteudos: Estudo = {};
  constructor(private afs: AngularFirestore) {
    this.conteudosCollection = this.afs.collection<Estudo>('Estudo');
  }
  getEstudos() {
    return this.conteudosCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return { id, ...data };
        });
      })
    );
  }
  addEstudo(conteudo: Estudo) {
    return this.conteudosCollection.add(conteudo);
  }
  getEstudo(id: string) {
    return this.conteudosCollection.doc<Estudo>(id).valueChanges();
  }

  updateEstudo(id: string, conteudo: Estudo) {
    return this.conteudosCollection.doc<Estudo>(id).update(conteudo);
  }

  deleteEstudo(id: string) {
    return this.conteudosCollection.doc(id).delete();
  }
}
