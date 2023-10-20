import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatospersonaPage } from './datospersona.page';

const routes: Routes = [
  {
    path: '',
    component: DatospersonaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatospersonaPageRoutingModule {}
