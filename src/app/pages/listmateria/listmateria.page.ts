import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Materia } from 'src/app/interfaces/materia';
import { MateriaService } from 'src/app/services/materia.service';

@Component({
  selector: 'app-listmateria',
  templateUrl: './listmateria.page.html',
  styleUrls: ['./listmateria.page.scss'],
})
export class ListmateriaPage implements OnInit {
  private loading: any;
  public materias = new Array<Materia>();
  private materiaSubscription: Subscription;
  constructor(
    private route: Router,
    private loadingCtrl: LoadingController,
    private materiaService: MateriaService,
    private toastCtrl: ToastController
  ) { 
    this.materiaSubscription = this.materiaService.getMaterias().subscribe(data => {
      this.materias = data;
    });
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.materiaSubscription.unsubscribe();
  }

  async deleteMateria(id: string) {
    try {
      await this.materiaService.deleteMateria(id);
    } catch (error) {
      this.presentToast('Erro ao tentar deletar');
    }
  }

  voltar(){
    this.route.navigate(['/tabs/home']);
  }
  doRefresh(event) {
    console.log('Begin async operation');
    window.location.reload()
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Aguarde...' });
    return this.loading.present();
  }
  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }

}
