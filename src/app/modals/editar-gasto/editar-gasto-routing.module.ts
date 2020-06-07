import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarGastoPage } from './editar-gasto.page';

const routes: Routes = [
  {
    path: '',
    component: EditarGastoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarGastoPageRoutingModule {}
