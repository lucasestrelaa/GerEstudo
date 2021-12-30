import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Estudo } from 'src/app/interfaces/estudo';
import { EstudoService } from 'src/app/services/estudo.service';

@Component({
  selector: 'app-listestudo',
  templateUrl: './listestudo.page.html',
  styleUrls: ['./listestudo.page.scss'],
})
export class ListestudoPage implements OnInit {
  private loading: any;
  public estudos = new Array<Estudo>();
  private estudosSubscription: Subscription;
  constructor(
    private route: Router,
    private loadingCtrl: LoadingController,
    private estudoService: EstudoService,
    private toastCtrl: ToastController
  ) { 
    this.estudosSubscription = this.estudoService.getEstudos().subscribe(data => {
      this.estudos = data;
    });
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.estudosSubscription.unsubscribe();
  }

  async deleteEstudo(id: string) {
    try {
      await this.estudoService.deleteEstudo(id);
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
