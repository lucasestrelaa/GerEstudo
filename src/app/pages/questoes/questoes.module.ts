import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuestoesPageRoutingModule } from './questoes-routing.module';

import { QuestoesPage } from './questoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestoesPageRoutingModule
  ],
  declarations: [QuestoesPage]
})
export class QuestoesPageModule {}
