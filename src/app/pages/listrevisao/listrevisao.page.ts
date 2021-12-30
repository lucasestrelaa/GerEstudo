import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Revisao } from 'src/app/interfaces/revisao';
import { RevisaoService } from 'src/app/services/revisao.service';

@Component({
  selector: 'app-listrevisao',
  templateUrl: './listrevisao.page.html',
  styleUrls: ['./listrevisao.page.scss'],
})
export class ListrevisaoPage implements OnInit {
  private loading: any;
  public revisoes = new Array<Revisao>();
  private revisaoSubscription: Subscription;
  constructor(
    private route: Router,
    private loadingCtrl: LoadingController,
    private revisaoService: RevisaoService,
    private toastCtrl: ToastController
  ) { 
    this.revisaoSubscription = this.revisaoService.getRevisoes().subscribe(data => {
      this.revisoes = data;
    });
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.revisaoSubscription.unsubscribe();
  }

  async deleteRevisao(id: string) {
    try {
      await this.revisaoService.deleteRevisao(id);
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
