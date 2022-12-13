import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'setting',
    loadChildren: () =>
      import('./pages/user-setting/user-setting.module').then(
        (m) => m.UserSettingModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/log-in.module').then((m) => m.LogInModule),
  },
  {
    path: 'create',
    loadChildren: () =>
      import('./pages/create-post/create-post.module').then(
        (m) => m.CreatePostModule
      ),
  },
  {
    path: 'detail',
    loadChildren: () =>
      import('./pages/detail/detail.module').then((m) => m.DetailModule),
  },
  {
    path: 'homepage',
    loadChildren: () =>
      import('./pages/homepage/homepage.module').then((m) => m.HomepageModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./pages/signup/signup.module').then((m) => m.SignupModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/profile/profile.module').then((m) => m.ProfileModule),
  },
  { path: 'search-result', loadChildren: () => import('./pages/search-result/search-result.module').then(m => m.SearchResultModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
