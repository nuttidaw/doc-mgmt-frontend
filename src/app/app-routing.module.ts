import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', loadChildren: './modules/home/home.module#HomeModule' }
      // { path: 'document101', loadChildren: './modules/document101/document101.module#Document101Module' },
      // { path: 'document102', loadChildren: './modules/document102/document102.module#Document102Module' },
      // { path: 'document103', loadChildren: './modules/document103/document103.module#Document103Module' },
      // { path: 'document1059', loadChildren: './modules/document1059/document1059.module#Document1059Module' },
      // { path: 'reports', loadChildren: './modules/reports/reports.module#ReportsModule' },
      // { path: 'search', loadChildren: './modules/search/search.module#SearchModule' },
      // { path: 'audit', loadChildren: './modules/audit/audit.module#AuditModule' },
      // { path: 'reference', loadChildren: './modules/reference/reference.module#ReferenceModule' },
      // { path: 'user', loadChildren: './modules/user/user.module#UserModule' },
      // { path: 'sysparam', loadChildren: './modules/system/system.module#SystemModule' },
      // { path: '', loadChildren: './modules/import-export/import-export.module#ImportExportModule' },
      // { path: 'schema', loadChildren: './modules/schema/schema.module#SchemaModule' },
      // { path: 'role', loadChildren: './modules/role/role.module#RoleModule' },
      // { path: 'internalaccount', loadChildren: './modules/internalaccount/internalaccount.module#InternalAccountModule' },
      // { path: 'excludeaccount', loadChildren: './modules/excludeaccount/excludeaccount.module#ExcludeAccountModule' },
      // { path: 'setting-profile', loadChildren: './modules/setting-profile/setting-profile.module#SettingProfileModule' }
    ]
  },
  // { path: 'login', component: LoginComponent, data: { title: 'ล็อคอิน' } },
  // { path: 'forgot-password/:id/:token', component: ForgotPasswordComponent, data: { title: 'รีเซตรหัสผ่าน' } },
  // { path: 'send-email-forgot-password', component: SendEmailComponent, data: { title: 'รีเซตรหัสผ่าน' } },
  // { path: '**', redirectTo: '' }
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