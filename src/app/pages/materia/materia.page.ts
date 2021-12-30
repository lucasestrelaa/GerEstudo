import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Materia } from 'src/app/interfaces/materia';
import { MateriaService } from 'src/app/services/materia.service';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.page.html',
  styleUrls: ['./materia.page.scss'],
})
export class MateriaPage implements OnInit {
  private materiaId: string = null;
  public materia: Materia = {};
  private loading: any;
  private materiaSubscription: Subscription;
  constructor(
    private materiaService: MateriaService,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    //private authService: AuthService,
    private toastCtrl: ToastController
    ) { 
      this.materiaId = this.activatedRoute.snapshot.params['id'];
    

    if (this.materiaId) this.loadMateria();
    }

  ngOnInit() {
  }
  loadMateria() {
    console.log("teste"+this.materiaId);
    this.materiaSubscription = this.materiaService.getMateria(this.materiaId).subscribe(data => {
      this.materia = data;
      //console.log(data + "Medico data")
    });
  }
  async saveMateria() {
    await this.presentLoading();

    //this.medico.id = (await this.authService.getAuth().currentUser).uid;

    if (this.materiaId) {
      try {
        await this.materiaService.updateMateria(this.materiaId, this.materia);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/listmateria');
      } catch (error) {
        this.presentToast('Erro ao tentar salvar');
        this.loading.dismiss();
      }
    } else {
      //this.medico.createdAt = new Date().getTime();

      try {
        
        await this.materiaService.addMateria(this.materia);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/listmateria');
      } catch (error) {
        this.presentToast('Erro ao tentar salvar');
        this.loading.dismiss();
      }
    }
  }
  voltar(){
    this.route.navigate(['/listmateria']);
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
