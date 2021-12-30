import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Conteudo } from 'src/app/interfaces/conteudo';
import { Materia } from 'src/app/interfaces/materia';
import { Questoes } from 'src/app/interfaces/questoes';
import { ConteudoService } from 'src/app/services/conteudo.service';
import { MateriaService } from 'src/app/services/materia.service';
import { QuestoesService } from 'src/app/services/questoes.service';

@Component({
  selector: 'app-questoes',
  templateUrl: './questoes.page.html',
  styleUrls: ['./questoes.page.scss'],
})
export class QuestoesPage implements OnInit {
  private questoesId: string;
  private loading: any;
  //materia
  public materias = new Array <Materia>();
  private materiaSubscription: Subscription;
  //conteudo
  public conteudos = new Array <Conteudo>();
  private conteudoSubscription: Subscription;
  //questoes
  public questoes: Questoes = {};
  private questoesSubscription: Subscription;
  constructor(
    private questoesService: QuestoesService,
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
    this.conteudoSubscription = this.conteudoService.getConteudos().subscribe(data => {
      this.conteudos = data;
    });
    this.questoesId = this.activatedRoute.snapshot.params['id'];
    if (this.questoesId) this.loadQuestao();
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.questoesSubscription.unsubscribe();
  }
  loadQuestao() {
    console.log("teste"+this.questoesId);
    this.questoesSubscription = this.questoesService.getQuestao(this.questoesId).subscribe(data => {
      this.questoes = data;
      //console.log(data + "Medico data")
    });
  }

  async deleteQuestoes(id: string) {
    try {
      await this.questoesService.deleteQuestao(id);
    } catch (error) {
      this.presentToast('Erro ao tentar deletar');
    }
  }
  calcula(){
    
  }
  async saveQuestoes() {
    await this.presentLoading();

    //this.medico.id = (await this.authService.getAuth().currentUser).uid;

    if (this.questoesId) {
      try {
        await this.questoesService.updateQuestao(this.questoesId, this.questoes);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/listquestoes');
      } catch (error) {
        this.presentToast('Erro ao tentar salvar');
        this.loading.dismiss();
      }
    } else {
      //this.medico.createdAt = new Date().getTime();

      try {
        
        await this.questoesService.addQuestao(this.questoes);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/listquestao');
      } catch (error) {
        this.presentToast('Erro ao tentar salvar');
        this.loading.dismiss();
      }
    }
  }

  voltar(){
    this.route.navigate(['/tabs/listquestoes']);
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
