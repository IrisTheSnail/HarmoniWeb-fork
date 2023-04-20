import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { User, users } from 'users';


const dashboardRoutes: Routes = [
  { path: 'users', component: DashboardComponent},
  // { path: 'empresas/cadastro', component: EmpresaCadastroComponent},
  // { path: 'empresas/:nome', component: EmpresaDetalheComponent},

 ];

 export const dashboardRouting: ModuleWithProviders<any> = RouterModule.forChild(dashboardRoutes);
 