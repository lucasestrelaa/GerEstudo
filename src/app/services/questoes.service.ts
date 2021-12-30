import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Questoes } from '../interfaces/questoes';

@Injectable({
  providedIn: 'root',
})
export class QuestoesService {
  private questaoCollection: AngularFirestoreCollection<Questoes>;
  //private bannerCollection: AngularFirestoreDocument<Banner>;
  public questao: Questoes = {};
  public questoes: Questoes = {};
  constructor(private afs: AngularFirestore) {
    this.questaoCollection = this.afs.collection<Questoes>('Questoes');
  }
  getQuestoes() {
    return this.questaoCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return { id, ...data };
        });
      })
    );
  }
  addQuestao(questao: Questoes) {
    return this.questaoCollection.add(questao);
  }
  getQuestao(id: string) {
    return this.questaoCollection.doc<Questoes>(id).valueChanges();
  }

  updateQuestao(id: string, questao: Questoes) {
    return this.questaoCollection.doc<Questoes>(id).update(questao);
  }

  deleteQuestao(id: string) {
    return this.questaoCollection.doc(id).delete();
  }
}
