import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AhorrosPageRoutingModule } from './ahorros-routing.module';

import { AhorrosPage } from './ahorros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AhorrosPageRoutingModule
  ],
  declarations: [AhorrosPage]
})
export class AhorrosPageModule {}
