import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Materia } from '../interfaces/materia';

@Injectable({
  providedIn: 'root',
})
export class MateriaService {
  private materiaCollection: AngularFirestoreCollection<Materia>;
  //private bannerCollection: AngularFirestoreDocument<Banner>;
  public materia: Materia = {};
  public materias: Materia = {};
  constructor(private afs: AngularFirestore) {
    this.materiaCollection = this.afs.collection<Materia>('Materia');
  }
  getMaterias() {
    return this.materiaCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return { id, ...data };
        });
      })
    );
  }
  addMateria(materia: Materia) {
    return this.materiaCollection.add(materia);
  }
  getMateria(id: string) {
    return this.materiaCollection.doc<Materia>(id).valueChanges();
  }

  updateMateria(id: string, materia: Materia) {
    return this.materiaCollection.doc<Materia>(id).update(materia);
  }

  deleteMateria(id: string) {
    return this.materiaCollection.doc(id).delete();
  }
}
