import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GetAllComponent } from './ubicaciones/get_all.component';
import { SaveUbicacionComponent } from './ubicaciones/save_ubicacion.component';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// External
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { UpdateUbicacionComponent } from './ubicaciones/update_ubicacion.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { ShowMapComponent } from './mapa/show_map.component';



@NgModule({
  declarations: [
    AppComponent,
    GetAllComponent,
    SaveUbicacionComponent,
    UpdateUbicacionComponent,
    ShowMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
