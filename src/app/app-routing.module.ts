import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'media',
    loadChildren: () => import('./media/media.module').then( m => m.MediaPageModule)
  },
  {
    path: 'banco',
    loadChildren: () => import('./banco/banco.module').then( m => m.BancoPageModule)
  },
  {
    path: 'salario',
    loadChildren: () => import('./salario/salario.module').then( m => m.SalarioPageModule)
  },
  {
    path: 'jornada',
    loadChildren: () => import('./jornada/jornada.module').then( m => m.JornadaPageModule)
  },
  {
    path: 'voto',
    loadChildren: () => import('./voto/voto.module').then( m => m.VotoPageModule)
  },
  {
    path: 'produto',
    loadChildren: () => import('./produto/produto.module').then( m => m.ProdutoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
