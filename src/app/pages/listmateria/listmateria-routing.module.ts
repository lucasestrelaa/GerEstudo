import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListmateriaPage } from './listmateria.page';

const routes: Routes = [
  {
    path: '',
    component: ListmateriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListmateriaPageRoutingModule {}
