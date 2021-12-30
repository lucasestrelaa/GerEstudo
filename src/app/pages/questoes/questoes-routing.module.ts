import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestoesPage } from './questoes.page';

const routes: Routes = [
  {
    path: '',
    component: QuestoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestoesPageRoutingModule {}
