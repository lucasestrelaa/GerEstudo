import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListquestoesPageRoutingModule } from './listquestoes-routing.module';

import { ListquestoesPage } from './listquestoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListquestoesPageRoutingModule
  ],
  declarations: [ListquestoesPage]
})
export class ListquestoesPageModule {}
