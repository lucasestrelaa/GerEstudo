import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListquestoesPage } from './listquestoes.page';

const routes: Routes = [
  {
    path: '',
    component: ListquestoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListquestoesPageRoutingModule {}
