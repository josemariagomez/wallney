import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresosModalPageRoutingModule } from './ingresos-modal-routing.module';

import { IngresosModalPage } from './ingresos-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresosModalPageRoutingModule
  ],
  declarations: [IngresosModalPage]
})
export class IngresosModalPageModule {}
