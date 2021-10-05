import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VotoPage } from './voto.page';

const routes: Routes = [
  {
    path: '',
    component: VotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VotoPageRoutingModule {}
