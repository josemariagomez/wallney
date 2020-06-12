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
  },
  {
    path: 'editar-ingreso',
    loadChildren: () => import('./modals/editar-ingreso/editar-ingreso.module').then( m => m.EditarIngresoPageModule)
  },
  {
    path: 'ahorros',
    loadChildren: () => import('./pages/ahorros/ahorros.module').then( m => m.AhorrosPageModule)
  },
  {
    path: 'meta',
    loadChildren: () => import('./modals/meta/meta.module').then( m => m.MetaPageModule)
  },
  {
    path: 'anadir-grupo',
    loadChildren: () => import('./modals/anadir-grupo/anadir-grupo.module').then( m => m.AnadirGrupoPageModule)
  },
  {
    path: 'grupo/:id',
    loadChildren: () => import('./pages/grupo/grupo.module').then( m => m.GrupoPageModule)
  },  {
    path: 'edit-group',
    loadChildren: () => import('./modals/edit-group/edit-group.module').then( m => m.EditGroupPageModule)
  }







];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
