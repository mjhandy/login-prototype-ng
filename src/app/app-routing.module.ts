import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/loginfow/login/login.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  // {
  //   path: '/forgot-password',
  //   loadChildren: () => import('./components/loginfow/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent)    
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
