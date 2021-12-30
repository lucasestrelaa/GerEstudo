import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'principal', pathMatch: 'full' },
  {
    path: 'principal',
    loadChildren: () => import('./pages/principal/principal.module').then( m => m.PrincipalPageModule)
  },
  { path: 'login', loadChildren: () => import('../app/pages/login/login.module').then(m => m.LoginPageModule), canActivate: [LoginGuard] },
  { path: 'cadastro', loadChildren: () => import('../app/pages/cadastro/cadastro.module').then(m => m.CadastroPageModule), canActivate: [LoginGuard] },
  {
    path: 'adm',
    loadChildren: () =>
      import('./pages/adm/adm.module').then((m) => m.AdmPageModule),canActivate: [AuthGuard]
  },
  {
    path: 'estudo',
    loadChildren: () =>
      import('./pages/estudo/estudo.module').then((m) => m.EstudoPageModule),canActivate: [AuthGuard]
  },
  {
    path: 'estudo/:id',
    loadChildren: () =>
      import('./pages/estudo/estudo.module').then((m) => m.EstudoPageModule),canActivate: [AuthGuard]
  },
  {
    path: 'listestudo',
    loadChildren: () =>
      import('./pages/listestudo/listestudo.module').then(
        (m) => m.ListestudoPageModule
      ),canActivate: [AuthGuard]
  },
  {
    path: 'listrevisao',
    loadChildren: () =>
      import('./pages/listrevisao/listrevisao.module').then(
        (m) => m.ListrevisaoPageModule
      ),canActivate: [AuthGuard]
  },
  {
    path: 'listquestoes',
    loadChildren: () =>
      import('./pages/listquestoes/listquestoes.module').then(
        (m) => m.ListquestoesPageModule
      ),canActivate: [AuthGuard]
  },
  {
    path: 'listmateria',
    loadChildren: () =>
      import('./pages/listmateria/listmateria.module').then(
        (m) => m.ListmateriaPageModule
      ),canActivate: [AuthGuard]
  },
  {
    path: 'listconteudo',
    loadChildren: () =>
      import('./pages/listconteudo/listconteudo.module').then(
        (m) => m.ListconteudoPageModule
      ),canActivate: [AuthGuard]
  },
  {
    path: 'listsimulado',
    loadChildren: () =>
      import('./pages/listsimulado/listsimulado.module').then(
        (m) => m.ListsimuladoPageModule
      ),canActivate: [AuthGuard]
  },
  {
    path: 'revisao',
    loadChildren: () =>
      import('./pages/revisao/revisao.module').then((m) => m.RevisaoPageModule),canActivate: [AuthGuard]
  },
  {
    path: 'revisao/:id',
    loadChildren: () =>
      import('./pages/revisao/revisao.module').then((m) => m.RevisaoPageModule),canActivate: [AuthGuard]
  },
  {
    path: 'questoes',
    loadChildren: () =>
      import('./pages/questoes/questoes.module').then(
        (m) => m.QuestoesPageModule
      ),canActivate: [AuthGuard]
  },
  {
    path: 'questoes/:id',
    loadChildren: () =>
      import('./pages/questoes/questoes.module').then(
        (m) => m.QuestoesPageModule
      ),canActivate: [AuthGuard]
  },
  {
    path: 'materia',
    loadChildren: () =>
      import('./pages/materia/materia.module').then((m) => m.MateriaPageModule),canActivate: [AuthGuard]
  },
  {
    path: 'materia?;id',
    loadChildren: () =>
      import('./pages/materia/materia.module').then((m) => m.MateriaPageModule),canActivate: [AuthGuard]
  },
  {
    path: 'conteudo',
    loadChildren: () =>
      import('./pages/conteudo/conteudo.module').then(
        (m) => m.ConteudoPageModule
      ),canActivate: [AuthGuard]
  },
  {
    path: 'conteudo/:id',
    loadChildren: () =>
      import('./pages/conteudo/conteudo.module').then(
        (m) => m.ConteudoPageModule
      ),canActivate: [AuthGuard]
  },
  {
    path: 'simulado',
    loadChildren: () =>
      import('./pages/simulado/simulado.module').then(
        (m) => m.SimuladoPageModule
      ),canActivate: [AuthGuard]
  },
  {
    path: 'simulado/:id',
    loadChildren: () =>
      import('./pages/simulado/simulado.module').then(
        (m) => m.SimuladoPageModule
      ),canActivate: [AuthGuard]
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),canActivate: [AuthGuard]
  },
  {
    path: 'resultado',
    loadChildren: () => import('./pages/resultado/resultado.module').then( m => m.ResultadoPageModule),canActivate: [AuthGuard]
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule),canActivate: [AuthGuard]
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
