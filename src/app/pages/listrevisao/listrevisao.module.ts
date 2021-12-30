import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListrevisaoPageRoutingModule } from './listrevisao-routing.module';

import { ListrevisaoPage } from './listrevisao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListrevisaoPageRoutingModule
  ],
  declarations: [ListrevisaoPage]
})
export class ListrevisaoPageModule {}
