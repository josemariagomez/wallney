import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SliderGuard } from './guards/slider.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [SliderGuard]
  },
  {
    path: 'slider',
    loadChildren: () => import('./slider/slider.module').then( m => m.SliderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'gastos',
    loadChildren: () => import('./gastos/gastos.module').then( m => m.GastosPageModule)
  },
  {
    path: 'ingresos',
    loadChildren: () => import('./ingresos/ingresos.module').then( m => m.IngresosPageModule)
  },  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'gastos-modal',
    loadChildren: () => import('./gastos-modal/gastos-modal.module').then( m => m.GastosModalPageModule)
  },
  {
    path: 'rest-password',
    loadChildren: () => import('./pages/rest-password/rest-password.module').then( m => m.RestPasswordPageModule)
  },
  {
    path: 'ingresos-modal',
    loadChildren: () => import('./ingresos-modal/ingresos-modal.module').then( m => m.IngresosModalPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
