import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GastosModalPage } from './gastos-modal.page';

const routes: Routes = [
  {
    path: '',
    component: GastosModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GastosModalPageRoutingModule {}
