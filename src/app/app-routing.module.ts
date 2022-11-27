import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowMapComponent } from './mapa/show-map.component';
import { Ubicaciones } from './models/ubicaciones';
import { GetAllComponent } from './ubicaciones/get-all.component';
import { SaveUbicacionComponent } from './ubicaciones/save-ubicacion.component';
import { UpdateUbicacionComponent } from './ubicaciones/update-ubicacion.component';

const routes: Routes = [
  { path: '', component: GetAllComponent },
  { path: 'ubicaciones/get', component: GetAllComponent },
  { path: 'ubicaciones/save', component: SaveUbicacionComponent},
  { path: 'ubicaciones/update/:id/:n_estacion/:lat/:long/:temp', component: UpdateUbicacionComponent},
  // { path: 'mapa', component: ShowMapComponent},
  { path: '**', redirectTo: 'ubicaciones' , pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
