import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'adm',
    loadChildren: () =>
      import('./pages/adm/adm.module').then((m) => m.AdmPageModule),
  },
  {
    path: 'estudo',
    loadChildren: () =>
      import('./pages/estudo/estudo.module').then((m) => m.EstudoPageModule),
  },
  {
    path: 'estudo/:id',
    loadChildren: () =>
      import('./pages/estudo/estudo.module').then((m) => m.EstudoPageModule),
  },
  {
    path: 'listestudo',
    loadChildren: () =>
      import('./pages/listestudo/listestudo.module').then(
        (m) => m.ListestudoPageModule
      ),
  },
  {
    path: 'listrevisao',
    loadChildren: () =>
      import('./pages/listrevisao/listrevisao.module').then(
        (m) => m.ListrevisaoPageModule
      ),
  },
  {
    path: 'listquestoes',
    loadChildren: () =>
      import('./pages/listquestoes/listquestoes.module').then(
        (m) => m.ListquestoesPageModule
      ),
  },
  {
    path: 'listmateria',
    loadChildren: () =>
      import('./pages/listmateria/listmateria.module').then(
        (m) => m.ListmateriaPageModule
      ),
  },
  {
    path: 'listconteudo',
    loadChildren: () =>
      import('./pages/listconteudo/listconteudo.module').then(
        (m) => m.ListconteudoPageModule
      ),
  },
  {
    path: 'listsimulado',
    loadChildren: () =>
      import('./pages/listsimulado/listsimulado.module').then(
        (m) => m.ListsimuladoPageModule
      ),
  },
  {
    path: 'revisao',
    loadChildren: () =>
      import('./pages/revisao/revisao.module').then((m) => m.RevisaoPageModule),
  },
  {
    path: 'revisao/:id',
    loadChildren: () =>
      import('./pages/revisao/revisao.module').then((m) => m.RevisaoPageModule),
  },
  {
    path: 'questoes',
    loadChildren: () =>
      import('./pages/questoes/questoes.module').then(
        (m) => m.QuestoesPageModule
      ),
  },
  {
    path: 'questoes/:id',
    loadChildren: () =>
      import('./pages/questoes/questoes.module').then(
        (m) => m.QuestoesPageModule
      ),
  },
  {
    path: 'materia',
    loadChildren: () =>
      import('./pages/materia/materia.module').then((m) => m.MateriaPageModule),
  },
  {
    path: 'materia?;id',
    loadChildren: () =>
      import('./pages/materia/materia.module').then((m) => m.MateriaPageModule),
  },
  {
    path: 'conteudo',
    loadChildren: () =>
      import('./pages/conteudo/conteudo.module').then(
        (m) => m.ConteudoPageModule
      ),
  },
  {
    path: 'conteudo/:id',
    loadChildren: () =>
      import('./pages/conteudo/conteudo.module').then(
        (m) => m.ConteudoPageModule
      ),
  },
  {
    path: 'simulado',
    loadChildren: () =>
      import('./pages/simulado/simulado.module').then(
        (m) => m.SimuladoPageModule
      ),
  },
  {
    path: 'simulado/:id',
    loadChildren: () =>
      import('./pages/simulado/simulado.module').then(
        (m) => m.SimuladoPageModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'resultado',
    loadChildren: () => import('./pages/resultado/resultado.module').then( m => m.ResultadoPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
