import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Conteudo } from 'src/app/interfaces/conteudo';
import { Estudo } from 'src/app/interfaces/estudo';
import { Materia } from 'src/app/interfaces/materia';
import { ConteudoService } from 'src/app/services/conteudo.service';
import { EstudoService } from 'src/app/services/estudo.service';
import { MateriaService } from 'src/app/services/materia.service';

@Component({
  selector: 'app-estudo',
  templateUrl: './estudo.page.html',
  styleUrls: ['./estudo.page.scss'],
})
export class EstudoPage implements OnInit {
  private estudoId: string;
  private loading: any;
  //materia
  public materias = new Array <Materia>();
  private materiaSubscription: Subscription;
  //conteudo
  public conteudos = new Array <Conteudo>();
  private conteudoSubscription: Subscription;
  //estudo
  public estudo: Estudo = {};
  private estudoSubscription: Subscription;
  constructor(
    private estudoService: EstudoService,
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
    
    this.estudoId = this.activatedRoute.snapshot.params['id'];
    if (this.estudoId) this.loadEstudo();
  }
  matC(idmat){
    console.log("filtrou");
    this.conteudoSubscription = this.conteudoService.getConteudos().subscribe(data => {
      const matSelecionada = materias => materias.id === idmat;

      this.conteudos = data.filter(matSelecionada);
    });
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.estudoSubscription.unsubscribe();
  }
  loadEstudo() {
    console.log("teste"+this.estudoId);
    this.estudoSubscription = this.estudoService.getEstudo(this.estudoId).subscribe(data => {
      this.estudo = data;
      //console.log(data + "Medico data")
    });
  }
  async saveEstudo() {
    await this.presentLoading();

    //this.medico.id = (await this.authService.getAuth().currentUser).uid;

    if (this.estudoId) {
      try {
        await this.estudoService.updateEstudo(this.estudoId, this.estudo);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/listestudo');
      } catch (error) {
        this.presentToast('Erro ao tentar salvar');
        this.loading.dismiss();
      }
    } else {
      //this.medico.createdAt = new Date().getTime();

      try {
        
        await this.estudoService.addEstudo(this.estudo);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/listestudo');
      } catch (error) {
        this.presentToast('Erro ao tentar salvar');
        this.loading.dismiss();
      }
    }
  }

  async deleteEstudo(id: string) {
    try {
      await this.estudoService.deleteEstudo(id);
    } catch (error) {
      this.presentToast('Erro ao tentar deletar');
    }
  }

  voltar(){
    this.route.navigate(['/tabs/listestudo']);
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
