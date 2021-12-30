import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Conteudo } from 'src/app/interfaces/conteudo';
import { Materia } from 'src/app/interfaces/materia';
import { Revisao } from 'src/app/interfaces/revisao';
import { ConteudoService } from 'src/app/services/conteudo.service';
import { MateriaService } from 'src/app/services/materia.service';
import { RevisaoService } from 'src/app/services/revisao.service';

@Component({
  selector: 'app-revisao',
  templateUrl: './revisao.page.html',
  styleUrls: ['./revisao.page.scss'],
})
export class RevisaoPage implements OnInit {
  private revisaoId: string;
  private loading: any;
  //materia
  public materias = new Array <Materia>();
  private materiaSubscription: Subscription;
  //conteudo
  public conteudos = new Array <Conteudo>();
  private conteudoSubscription: Subscription;
  //revisao
  public revisao: Revisao = {};
  private revisaoSubscription: Subscription;
  constructor(
    private revisaoService: RevisaoService,
    private materiaService: MateriaService,
    private conteudoService: ConteudoService,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    //private authService: AuthService,
    private toastCtrl: ToastController) { 
    this.materiaSubscription = this.materiaService.getMaterias().subscribe(data => {
      this.materias = data;
    });
    this.conteudoSubscription = this.conteudoService.getConteudos().subscribe(data => {
      this.conteudos = data;
    });
    this.revisaoId = this.activatedRoute.snapshot.params['id'];
    if (this.revisaoId) this.loadRevisao();
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.revisaoSubscription.unsubscribe();
  }
  loadRevisao() {
    console.log("teste"+this.revisaoId);
    this.revisaoSubscription = this.revisaoService.getRevisao(this.revisaoId).subscribe(data => {
      this.revisao = data;
      //console.log(data + "Medico data")
    });
  }

  async saveRevisao() {
    await this.presentLoading();

    //this.medico.id = (await this.authService.getAuth().currentUser).uid;

    if (this.revisaoId) {
      try {
        await this.revisaoService.updateRevisao(this.revisaoId, this.revisao);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/tabs/listrevisao');
      } catch (error) {
        this.presentToast('Erro ao tentar salvar');
        this.loading.dismiss();
      }
    } else {
      //this.medico.createdAt = new Date().getTime();

      try {
        
        await this.revisaoService.addRevisao(this.revisao);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/listrevisaos');
      } catch (error) {
        this.presentToast('Erro ao tentar salvar');
        this.loading.dismiss();
      }
    }
  }
  async deleteRevisao(id: string) {
    try {
      await this.revisaoService.deleteRevisao(id);
    } catch (error) {
      this.presentToast('Erro ao tentar deletar');
    }
  }

  voltar(){
    this.route.navigate(['/tabs/listrevisao']);
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
