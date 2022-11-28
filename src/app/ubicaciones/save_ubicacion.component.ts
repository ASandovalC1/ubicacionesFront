import { Component } from '@angular/core';
import { Ubicaciones } from '../models/ubicaciones';
import { UbicacionesService } from '../service/ubicaciones.service';
import { OnInit} from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-save-ubicacion',
  templateUrl: './save_ubicacion.component.html',
  styleUrls: ['./save_ubicacion.component.scss']
})
export class SaveUbicacionComponent {
  ubicacion: Ubicaciones = new Ubicaciones(0, "", "", "", 0);
  latitud: number = 0;
  longitud: number = 0;

  constructor(private ubicacionesService : UbicacionesService, private router:Router) { }

  ngOnInit(): void {
    console.log(this.ubicacion);
  }



  private postUbicacion(ubicacion:Ubicaciones): void{
    this.ubicacionesService.save(ubicacion).subscribe(
      response => {
        console.log(response);
        Swal.fire('Ubicacion creada con exito', `Ubicacion ${this.ubicacion.nombre_estacion} creada con exito`, 'success');
        this.goMain();
      },
      error => {
        console.log(error);
      }
    );
  }

  clickCancel(): void{
    Swal.fire({
      title: 'Perderas los cambios realizados',
      showDenyButton: true,
      denyButtonText: 'Cancelar',
      confirmButtonText: `Si`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.goMain();
      }
    })
  }

  goMain(): void {
    this.router.navigate(['']);
  }

  onSubmit(): void {
    this.ubicacion.latitud = String(this.latitud);
    this.ubicacion.longitud = String(this.longitud);
    this.postUbicacion(this.ubicacion);
    console.log(this.ubicacion);
  }
}
