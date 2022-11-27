import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllComponent } from './ubicaciones/get-all.component';

const routes: Routes = [
  { path: '', component: GetAllComponent },
  { path: '**', redirectTo: '' , pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
