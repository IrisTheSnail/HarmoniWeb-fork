import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SigninComponent } from './signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { PlaylistComponent } from './dashboard/playlist/playlist.component'
import { HomeComponent } from './dashboard/home/home.component'
import { PlayerComponent } from './dashboard/player/player.component';

import { AuthGuard } from './controller/guards/auth.guard.ts.guard';
import { User } from './controller/services/user';
import { AuthService } from './controller/services/auth.service.ts.service';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  {path: 'welcome', component:WelcomeComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'signin', component:SigninComponent},
  // {path: 'dashboard/:', component:DashboardComponent, canActivate: [AuthGuard]},
  { path: 'user/:id', component: DashboardComponent,
    children:[
      {path:'settings', component:SettingsComponent, outlet:'skin'},
      {path: 'home', component:HomeComponent, outlet:'skin'}
    ], canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
