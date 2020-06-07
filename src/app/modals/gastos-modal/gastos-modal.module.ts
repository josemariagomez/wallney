import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GastosModalPageRoutingModule } from './gastos-modal-routing.module';

import { GastosModalPage } from './gastos-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GastosModalPageRoutingModule
  ],
  declarations: [GastosModalPage]
})
export class GastosModalPageModule {}
