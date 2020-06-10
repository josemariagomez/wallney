import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import { GastosModalPageModule } from './modals/gastos-modal/gastos-modal.module';
import { IngresosModalPageModule } from './modals/ingresos-modal/ingresos-modal.module';
import { EditarIngresoPageModule } from './modals/editar-ingreso/editar-ingreso.module';
import { EditarGastoPageModule } from './modals/editar-gasto/editar-gasto.module';
import { InformationModalPageModule } from './modals/information-modal/information-modal.module';
import { MetaPageModule } from './modals/meta/meta.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    GastosModalPageModule,
    IngresosModalPageModule,
    EditarIngresoPageModule,
    EditarGastoPageModule,
    InformationModalPageModule,
    MetaPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
