import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SigninComponent } from './signin/signin.component';
import { dashboardRouting } from 'src/app/dashboard/dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';




const routes: Routes = [
  {path: 'welcome', component:WelcomeComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'signin', component:SigninComponent},
  {path: 'dashboard', component:DashboardComponent},
  // { path: '',   redirectTo: 'welcome', pathMatch: 'full' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    dashboardRouting,
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
