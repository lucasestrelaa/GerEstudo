import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Questoes } from 'src/app/interfaces/questoes';
import { QuestoesService } from 'src/app/services/questoes.service';

@Component({
  selector: 'app-listquestoes',
  templateUrl: './listquestoes.page.html',
  styleUrls: ['./listquestoes.page.scss'],
})
export class ListquestoesPage implements OnInit {
  private loading: any;
  public questoes = new Array<Questoes>();
  private questoessSubscription: Subscription;
  constructor(
    private route: Router,
    private loadingCtrl: LoadingController,
    private questoesService: QuestoesService,
    private toastCtrl: ToastController
  ) { 
    this.questoessSubscription = this.questoesService.getQuestoes().subscribe(data => {
      this.questoes = data;
    });
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.questoessSubscription.unsubscribe();
  }

  async deleteQuestao(id: string) {
    try {
      await this.questoesService.deleteQuestao(id);
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
