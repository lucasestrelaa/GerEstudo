import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListsimuladoPageRoutingModule } from './listsimulado-routing.module';

import { ListsimuladoPage } from './listsimulado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListsimuladoPageRoutingModule
  ],
  declarations: [ListsimuladoPage]
})
export class ListsimuladoPageModule {}
