import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Simulado } from 'src/app/interfaces/simulado';
import { SimuladoService } from 'src/app/services/simulado.service';

@Component({
  selector: 'app-listsimulado',
  templateUrl: './listsimulado.page.html',
  styleUrls: ['./listsimulado.page.scss'],
})
export class ListsimuladoPage implements OnInit {
  private loading: any;
  public simulados = new Array<Simulado>();
  private simuladosSubscription: Subscription;
  constructor(
    //private authService: AuthService,
    private route: Router,
    private loadingCtrl: LoadingController,
    private simuladoService: SimuladoService,
    private toastCtrl: ToastController
  ) { 
    this.simuladosSubscription = this.simuladoService.getSimulados().subscribe(data => {
      this.simulados = data;
    });
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.simuladosSubscription.unsubscribe();
  }

  async deleteSimulado(id: string) {
    try {
      await this.simuladoService.deleteSimulado(id);
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
