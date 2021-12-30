import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstudoPageRoutingModule } from './estudo-routing.module';

import { EstudoPage } from './estudo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstudoPageRoutingModule
  ],
  declarations: [EstudoPage]
})
export class EstudoPageModule {}
