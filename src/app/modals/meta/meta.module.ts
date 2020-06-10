import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MetaPageRoutingModule } from './meta-routing.module';

import { MetaPage } from './meta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MetaPageRoutingModule
  ],
  declarations: [MetaPage]
})
export class MetaPageModule {}
