import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './modules/shared/shared.module';
import { HearderFooterComponent } from './components/hearder-footer/hearder-footer.component';
import {MatIconModule} from '@angular/material/icon';
import { FooterComponent } from './components/footer/footer.component'
import { HttpClientModule } from '@angular/common/http';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HearderFooterComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}, {}),
    BrowserAnimationsModule,
    SharedModule,
    MatIconModule,
    HttpClientModule,
    provideAuth (() => getAuth()),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
