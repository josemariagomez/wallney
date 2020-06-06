import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestPasswordPage } from './rest-password.page';

const routes: Routes = [
  {
    path: '',
    component: RestPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestPasswordPageRoutingModule {}
