import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { GetWeatherDataComponent } from './get-weather-data/get-weather-data.component';
import {ReactiveFormsModule} from "@angular/forms";
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    GetWeatherDataComponent,
    MapComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
