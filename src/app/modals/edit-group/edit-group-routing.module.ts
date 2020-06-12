import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditGroupPage } from './edit-group.page';

const routes: Routes = [
  {
    path: '',
    component: EditGroupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditGroupPageRoutingModule {}
