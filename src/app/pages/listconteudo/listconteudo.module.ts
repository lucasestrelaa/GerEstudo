import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListconteudoPageRoutingModule } from './listconteudo-routing.module';

import { ListconteudoPage } from './listconteudo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListconteudoPageRoutingModule
  ],
  declarations: [ListconteudoPage]
})
export class ListconteudoPageModule {}
