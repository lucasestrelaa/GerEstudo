import { Injectable } from '@angular/core';
import { Conteudo } from '../interfaces/conteudo';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ConteudoService {
  private conteudoCollection: AngularFirestoreCollection<Conteudo>;
  public conteudo: Conteudo = {};
  public conteudos: Conteudo = {};
  constructor(private afs: AngularFirestore) {
    this.conteudoCollection = this.afs.collection<Conteudo>('Conteudo');
  }
  getConteudos() {
    return this.conteudoCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }
  addConteudo(conteudo: Conteudo) {
    return this.conteudoCollection.add(conteudo);
  }
  getConteudo(id: string) {
    return this.conteudoCollection.doc<Conteudo>(id).valueChanges();
  }

  updateConteudo(id: string, conteudo: Conteudo) {
    return this.conteudoCollection.doc<Conteudo>(id).update(conteudo);
  }

  deleteConteudo(id: string) {
    return this.conteudoCollection.doc(id).delete();
  }
}
