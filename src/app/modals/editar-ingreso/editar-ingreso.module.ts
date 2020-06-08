import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarIngresoPageRoutingModule } from './editar-ingreso-routing.module';

import { EditarIngresoPage } from './editar-ingreso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarIngresoPageRoutingModule
  ],
  declarations: [EditarIngresoPage]
})
export class EditarIngresoPageModule {}
