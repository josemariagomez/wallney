import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SliderGuard } from './guards/slider.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [SliderGuard]
  },
  {
    path: 'slider',
    loadChildren: () => import('./pages/slider/slider.module').then( m => m.SliderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'gastos',
    loadChildren: () => import('./pages/gastos/gastos.module').then( m => m.GastosPageModule)
  },
  {
    path: 'ingresos',
    loadChildren: () => import('./pages/ingresos/ingresos.module').then( m => m.IngresosPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'gastos-modal',
    loadChildren: () => import('./modals/gastos-modal/gastos-modal.module').then( m => m.GastosModalPageModule)
  },
  {
    path: 'rest-password',
    loadChildren: () => import('./pages/rest-password/rest-password.module').then( m => m.RestPasswordPageModule)
  },
  {
    path: 'ingresos-modal',
    loadChildren: () => import('./modals/ingresos-modal/ingresos-modal.module').then( m => m.IngresosModalPageModule)
  },
  {
    path: 'information-modal',
    loadChildren: () => import('./modals/information-modal/information-modal.module').then( m => m.InformationModalPageModule)
  },
  {
    path: 'editar-gasto',
    loadChildren: () => import('./modals/editar-gasto/editar-gasto.module').then( m => m.EditarGastoPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
