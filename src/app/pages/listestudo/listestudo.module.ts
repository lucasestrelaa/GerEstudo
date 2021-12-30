import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListestudoPageRoutingModule } from './listestudo-routing.module';

import { ListestudoPage } from './listestudo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListestudoPageRoutingModule
  ],
  declarations: [ListestudoPage]
})
export class ListestudoPageModule {}
