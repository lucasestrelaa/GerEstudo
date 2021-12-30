import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'listestudo',
        loadChildren: () =>
          import('../listestudo/listestudo.module').then(
            (m) => m.ListestudoPageModule
          ),
      },
      {
        path: 'listconteudo',
        loadChildren: () =>
          import('../listconteudo/listconteudo.module').then(
            (m) => m.ListconteudoPageModule
          ),
      },
      {
        path: 'listmateria',
        loadChildren: () =>
          import('../listmateria/listmateria.module').then(
            (m) => m.ListmateriaPageModule
          ),
      },
      {
        path: 'listrevisao',
        loadChildren: () =>
          import('../listrevisao/listrevisao.module').then(
            (m) => m.ListrevisaoPageModule
          ),
      },
      {
        path: 'listquestoes',
        loadChildren: () =>
          import('../listquestoes/listquestoes.module').then(
            (m) => m.ListquestoesPageModule
          ),
      },
      {
        path: 'listsimulado',
        loadChildren: () =>
          import('../listsimulado/listsimulado.module').then(
            (m) => m.ListsimuladoPageModule
          ),
      },
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
