import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@app/core';
//import { LoginComponent } from './modules/auth/components/login/login.component';
//import { ForgotPasswordComponent } from './modules/auth/components/forgot-password/forgot-password.component';
//import { SendEmailComponent } from './modules/auth/components/send-email/send-email.component';

const routes: Routes = [
  {
    path: '', canActivate: [AuthGuard], children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', loadChildren: './modules/home/home.module#HomeModule' },
      { path: 'login', loadChildren: './modules/login/login.module#LoginModule' }
    ]
  },
  //{ path: 'login', component: LoginComponent, data: { title: 'ล็อคอิน' } },
  //{ path: 'forgot-password/:id/:token', component: ForgotPasswordComponent, data: { title: 'รีเซตรหัสผ่าน' } },
  //{ path: 'send-email-forgot-password', component: SendEmailComponent, data: { title: 'รีเซตรหัสผ่าน' } },
  //{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
