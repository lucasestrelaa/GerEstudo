import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
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
          ),canActivate: [AuthGuard]
      },
      {
        path: 'listconteudo',
        loadChildren: () =>
          import('../listconteudo/listconteudo.module').then(
            (m) => m.ListconteudoPageModule
          ),canActivate: [AuthGuard]
      },
      {
        path: 'listmateria',
        loadChildren: () =>
          import('../listmateria/listmateria.module').then(
            (m) => m.ListmateriaPageModule
          ),canActivate: [AuthGuard]
      },
      {
        path: 'listrevisao',
        loadChildren: () =>
          import('../listrevisao/listrevisao.module').then(
            (m) => m.ListrevisaoPageModule
          ),canActivate: [AuthGuard]
      },
      {
        path: 'listquestoes',
        loadChildren: () =>
          import('../listquestoes/listquestoes.module').then(
            (m) => m.ListquestoesPageModule
          ),canActivate: [AuthGuard]
      },
      {
        path: 'listsimulado',
        loadChildren: () =>
          import('../listsimulado/listsimulado.module').then(
            (m) => m.ListsimuladoPageModule
          ),canActivate: [AuthGuard]
      },
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomePageModule),canActivate: [AuthGuard]
      },
      {
        path: '',
        redirectTo: 'home',
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
