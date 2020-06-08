import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarIngresoPage } from './editar-ingreso.page';

const routes: Routes = [
  {
    path: '',
    component: EditarIngresoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarIngresoPageRoutingModule {}
