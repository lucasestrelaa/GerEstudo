import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Simulado } from '../interfaces/simulado';

@Injectable({
  providedIn: 'root',
})
export class SimuladoService {
  private simuladoCollection: AngularFirestoreCollection<Simulado>;
  //private bannerCollection: AngularFirestoreDocument<Banner>;
  public simulado: Simulado = {};
  public simulados: Simulado = {};
  constructor(private afs: AngularFirestore) {
    this.simuladoCollection = this.afs.collection<Simulado>('Simulado');
  }
  getSimulados() {
    return this.simuladoCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return { id, ...data };
        });
      })
    );
  }
  addSimulado(simulado: Simulado) {
    return this.simuladoCollection.add(simulado);
  }
  getSimulado(id: string) {
    return this.simuladoCollection.doc<Simulado>(id).valueChanges();
  }

  updateSimulado(id: string, simulado: Simulado) {
    return this.simuladoCollection.doc<Simulado>(id).update(simulado);
  }

  deleteSimulado(id: string) {
    return this.simuladoCollection.doc(id).delete();
  }
}
