import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListestudoPage } from './listestudo.page';

const routes: Routes = [
  {
    path: '',
    component: ListestudoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListestudoPageRoutingModule {}
