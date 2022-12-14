import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { SearchResultRoutingModule } from './search-result-routing.module';
import { SearchResultComponent } from './search-result.component';


@NgModule({
  declarations: [
    SearchResultComponent
  ],
  imports: [
    CommonModule,
    SearchResultRoutingModule,
    MatButtonToggleModule
  ]
})
export class SearchResultModule { }




