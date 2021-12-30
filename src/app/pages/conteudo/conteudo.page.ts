import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Conteudo } from 'src/app/interfaces/conteudo';
import { Materia } from 'src/app/interfaces/materia';
import { ConteudoService } from 'src/app/services/conteudo.service';
import { MateriaService } from 'src/app/services/materia.service';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.page.html',
  styleUrls: ['./conteudo.page.scss'],
})
export class ConteudoPage implements OnInit {
  private conteudoId: string;
  private loading: any;
  public materias = new Array <Materia>();
  private materiaSubscription: Subscription;

  public conteudo: Conteudo = {};
  private conteudoSubscription: Subscription;
  constructor(
    private materiaService: MateriaService,
    private conteudoService: ConteudoService,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    //private authService: AuthService,
    private toastCtrl: ToastController
  ) { 
    this.materiaSubscription = this.materiaService.getMaterias().subscribe(data => {
      this.materias = data;
    });
    this.conteudoId = this.activatedRoute.snapshot.params['id'];
    if (this.conteudoId) this.loadConteudo();
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.conteudoSubscription.unsubscribe();
  }
  loadConteudo() {
    console.log("teste"+this.conteudoId);
    this.conteudoSubscription = this.conteudoService.getConteudo(this.conteudoId).subscribe(data => {
      this.conteudo = data;
      //console.log(data + "Medico data")
    });
  }
  async saveConteudo() {
    await this.presentLoading();

    //this.medico.id = (await this.authService.getAuth().currentUser).uid;

    if (this.conteudoId) {
      try {
        await this.conteudoService.updateConteudo(this.conteudoId, this.conteudo);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/listconteudo');
      } catch (error) {
        this.presentToast('Erro ao tentar salvar');
        this.loading.dismiss();
      }
    } else {
      //this.medico.createdAt = new Date().getTime();

      try {
        
        await this.conteudoService.addConteudo(this.conteudo);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/listconteudo');
      } catch (error) {
        this.presentToast('Erro ao tentar salvar');
        this.loading.dismiss();
      }
    }
  }

  async deleteConteudo(id: string) {
    try {
      await this.conteudoService.deleteConteudo(id);
    } catch (error) {
      this.presentToast('Erro ao tentar deletar');
    }
  }

  voltar(){
    this.route.navigate(['/tabs/listconteudo']);
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
