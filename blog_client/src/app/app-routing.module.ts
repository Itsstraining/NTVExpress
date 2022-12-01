import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'userSetting', loadChildren: () => import('./pages/user-setting/user-setting.module').then(m => m.UserSettingModule) }, { path: 'log-in', loadChildren: () => import('./pages/log-in/log-in.module').then(m => m.LogInModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
