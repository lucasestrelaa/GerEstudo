import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListmateriaPageRoutingModule } from './listmateria-routing.module';

import { ListmateriaPage } from './listmateria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListmateriaPageRoutingModule
  ],
  declarations: [ListmateriaPage]
})
export class ListmateriaPageModule {}
