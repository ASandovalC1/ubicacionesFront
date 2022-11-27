import { Component } from '@angular/core';
import { Ubicaciones } from '../models/ubicaciones';
import { UbicacionesService } from '../service/ubicaciones.service';

@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.component.html',
  styleUrls: ['./get-all.component.scss']
})
export class GetAllComponent {

  // lista vacia de ubicaciones
  lista_ubicaciones: Ubicaciones[] = [];

  constructor(private ubicacionesService : UbicacionesService) { }

  ngOnInit(){
    this.getUbicaciones();
  }

  private getUbicaciones(): void{
    console.log("getUbicaciones");
    this.ubicacionesService.getUbicaciones().subscribe( dato => {
      // dato.forEach(element => {
      //   console.log(element)
      //   this.lista_ubicaciones.push(element);
      // });
      this.lista_ubicaciones = dato;

      console.log(this.lista_ubicaciones);
    }
    );
  }

}
