import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Conteudo } from 'src/app/interfaces/conteudo';
import { ConteudoService } from 'src/app/services/conteudo.service';

@Component({
  selector: 'app-listconteudo',
  templateUrl: './listconteudo.page.html',
  styleUrls: ['./listconteudo.page.scss'],
})
export class ListconteudoPage implements OnInit {
  private loading: any;
  public conteudos = new Array<Conteudo>();
  private conteudosSubscription: Subscription;
  constructor(
    private route: Router,
    private loadingCtrl: LoadingController,
    private conteudoService: ConteudoService,
    private toastCtrl: ToastController
  ) { 
    this.conteudosSubscription = this.conteudoService.getConteudos().subscribe(data => {
      this.conteudos = data;
    });
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.conteudosSubscription.unsubscribe();
  }

  async deleteConteudo(id: string) {
    try {
      await this.conteudoService.deleteConteudo(id);
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
