import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GetAllComponent } from './ubicaciones/get-all.component';
import { SaveUbicacionComponent } from './ubicaciones/save-ubicacion.component';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// External
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { UpdateUbicacionComponent } from './ubicaciones/update-ubicacion.component';



@NgModule({
  declarations: [
    AppComponent,
    GetAllComponent,
    SaveUbicacionComponent,
    UpdateUbicacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
