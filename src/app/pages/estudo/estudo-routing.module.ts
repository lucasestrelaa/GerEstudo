import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstudoPage } from './estudo.page';

const routes: Routes = [
  {
    path: '',
    component: EstudoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstudoPageRoutingModule {}
