import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListconteudoPage } from './listconteudo.page';

const routes: Routes = [
  {
    path: '',
    component: ListconteudoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListconteudoPageRoutingModule {}
