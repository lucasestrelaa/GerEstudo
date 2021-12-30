import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Simulado } from 'src/app/interfaces/simulado';
import { SimuladoService } from 'src/app/services/simulado.service';

@Component({
  selector: 'app-simulado',
  templateUrl: './simulado.page.html',
  styleUrls: ['./simulado.page.scss'],
})
export class SimuladoPage implements OnInit {
  
  private loading: any;
  private simuladoId: string;
  public simulado: Simulado = {};
  private simuladoSubscription: Subscription;
  constructor(
    private simuladoService: SimuladoService,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    //private authService: AuthService,
    private toastCtrl: ToastController
  ) { 
    this.simuladoId = this.activatedRoute.snapshot.params['id'];
    if (this.simuladoId) this.loadEstudo();
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.simuladoSubscription.unsubscribe();
  }
  loadEstudo() {
    console.log("teste"+this.simuladoId);
    this.simuladoSubscription = this.simuladoService.getSimulado(this.simuladoId).subscribe(data => {
      this.simulado = data;
      //console.log(data + "Medico data")
    });
  }
  async saveSimulado() {
    await this.presentLoading();

    //this.medico.id = (await this.authService.getAuth().currentUser).uid;

    if (this.simuladoId) {
      try {
        await this.simuladoService.updateSimulado(this.simuladoId, this.simulado);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/listsimulado');
      } catch (error) {
        this.presentToast('Erro ao tentar salvar');
        this.loading.dismiss();
      }
    } else {
      //this.medico.createdAt = new Date().getTime();

      try {
        
        await this.simuladoService.addSimulado(this.simulado);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/listsimulados');
      } catch (error) {
        this.presentToast('Erro ao tentar salvar');
        this.loading.dismiss();
      }
    }
  }

  calcula(){
    
    
  }

  async deleteSimulado(id: string) {
    try {
      await this.simuladoService.deleteSimulado(id);
    } catch (error) {
      this.presentToast('Erro ao tentar deletar');
    }
  }

  voltar(){
    this.route.navigate(['/tabs/listsimulado']);
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
