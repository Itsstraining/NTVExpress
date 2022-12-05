import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/user-setting/user-setting.module').then(
        (m) => m.UserSettingModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/log-in/log-in.module').then((m) => m.LogInModule),
  },
  {
    path: 'create',
    loadChildren: () =>
      import('./pages/create-post/create-post.module').then(
        (m) => m.CreatePostModule
      ),
  },
  { path: 'homepage', loadChildren: () => import('./pages/homepage/homepage.module').then(m => m.HomepageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
