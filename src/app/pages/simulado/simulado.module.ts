import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SimuladoPageRoutingModule } from './simulado-routing.module';

import { SimuladoPage } from './simulado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SimuladoPageRoutingModule
  ],
  declarations: [SimuladoPage]
})
export class SimuladoPageModule {}
