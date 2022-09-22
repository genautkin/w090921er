import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { IfUserLogin } from './services/authGate.service';
import { IfCanOpenLogin } from './services/loginGate.service';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent,canActivate: [IfUserLogin]},
  {path: 'login', component: LoginComponent, canActivate: [IfCanOpenLogin]},    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
