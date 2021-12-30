import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListrevisaoPage } from './listrevisao.page';

const routes: Routes = [
  {
    path: '',
    component: ListrevisaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListrevisaoPageRoutingModule {}
