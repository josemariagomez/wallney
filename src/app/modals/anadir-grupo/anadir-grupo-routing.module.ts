import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnadirGrupoPage } from './anadir-grupo.page';

const routes: Routes = [
  {
    path: '',
    component: AnadirGrupoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnadirGrupoPageRoutingModule {}
