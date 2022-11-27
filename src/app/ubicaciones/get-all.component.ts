import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { Ubicaciones } from '../models/ubicaciones';
import { UbicacionesService } from '../service/ubicaciones.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.component.html',
  styleUrls: ['./get-all.component.scss']
})
export class GetAllComponent {

  // lista vacia de ubicaciones
  lista_ubicaciones: Ubicaciones[] = [];

  constructor(private ubicacionesService : UbicacionesService, private router:Router) { }

  ngOnInit(){
    this.getUbicaciones();
  }

  private getUbicaciones(): void{
    // console.log("getUbicaciones");
    this.ubicacionesService.getUbicaciones().subscribe( dato => {
      // dato.forEach(element => {
      //   console.log(element)
      //   this.lista_ubicaciones.push(element);
      // });
      this.lista_ubicaciones = dato;
      // for (let index = 0; index < this.lista_ubicaciones.length; index++) {
      //   const element = this.lista_ubicaciones[index];
      //   console.log(element);
      // }

      // console.log(this.lista_ubicaciones);
    }
    );
  }


  private deleteUbicacion(id: number): void{
    console.log("deleteUbicacion");
    Swal.fire({
      title: '¿Estas seguro de eliminar la ubicacion ?',
      showDenyButton: true,
      denyButtonText: 'Cancelar',
      confirmButtonText: `Si`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.ubicacionesService.delete(id).subscribe(
          response => {
          console.log(response);
          this.goMain();
          },
          error => {
            console.log(error);
          }
          );
      }
    })
  }

  clickUpdate(ubicacion: Ubicaciones): void{
    console.log("clickUpdate");
    this.router.navigate(['/ubicaciones/update', ubicacion.id, ubicacion.nombre_estacion, ubicacion.latitud, ubicacion.longitud, ubicacion.temperatura]);
  }

  clickDelete(id: number): void{
    console.log("clickDelete");
    this.deleteUbicacion(id);
  }

  clickCreate(): void{
    console.log("clickCreate");
    this.router.navigate(['/ubicaciones/save']);
  }

  clickRefresh(): void{
    console.log("clickRefresh");
    this.goMain();
  }

  goMain(): void {
    console.log("goMain");
    window.location.reload()
    // this.router.navigate(['']);
    // setTimeout(() => {
    //   console.log("goMain waiting");
    //   this.router.navigate(['/ubicaciones/get']);
    // }, 50);

  }

}
