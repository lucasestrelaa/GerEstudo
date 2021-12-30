import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimuladoPage } from './simulado.page';

const routes: Routes = [
  {
    path: '',
    component: SimuladoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SimuladoPageRoutingModule {}
