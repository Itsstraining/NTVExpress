import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserSettingRoutingModule } from './user-setting-routing.module';
import { UserSettingComponent } from './user-setting.component';


@NgModule({
  declarations: [
    UserSettingComponent
  ],
  imports: [
    CommonModule,
    UserSettingRoutingModule
  ]
})
export class UserSettingModule { }
