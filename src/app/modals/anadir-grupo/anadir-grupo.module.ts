import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnadirGrupoPageRoutingModule } from './anadir-grupo-routing.module';

import { AnadirGrupoPage } from './anadir-grupo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnadirGrupoPageRoutingModule
  ],
  declarations: [AnadirGrupoPage]
})
export class AnadirGrupoPageModule {}
