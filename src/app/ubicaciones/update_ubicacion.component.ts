import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UbicacionesService } from '../service/ubicaciones.service';
import { Ubicaciones } from '../models/ubicaciones';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-ubicacion',
  templateUrl: './update_ubicacion.component.html',
  styleUrls: ['./update_ubicacion.component.scss']
})
export class UpdateUbicacionComponent {
  ubicacion_update: Ubicaciones = new Ubicaciones(0, "", "", "", 0);
  latitud: number = 0;
  longitud: number = 0;
  constructor(private ubicacionesService: UbicacionesService, private router:Router, private route: ActivatedRoute) { }

  sub : any;
  id : any;
  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe((params)=>{
      // console.log(params);
      this.ubicacion_update.id = Number(params.get('id'));
      this.ubicacion_update.nombre_estacion = String(params.get('n_estacion'));
      this.ubicacion_update.latitud = String(params.get('lat'));
      this.latitud = Number(params.get('lat'));
      this.ubicacion_update.longitud = String(params.get('long'));
      this.longitud = Number(params.get('long'));
      this.ubicacion_update.temperatura = Number(params.get('temp'));
      console.log(this.ubicacion_update);

    });
  }

  onSubmit(): void {
    console.log("onSubmit");
    this.ubicacion_update.latitud = String(this.latitud);
    this.ubicacion_update.longitud = String(this.longitud);
    this.ubicacionesService.update(this.ubicacion_update).subscribe(
      response => {
      console.log(response);
      Swal.fire('Ubicacion actualizada con exito', `Ubicacion ${this.ubicacion_update.nombre_estacion} actualizada con exito`, 'success');
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
    // this.goMain();
  }
  goMain(): void {

    this.router.navigate(['']);
  }

}
