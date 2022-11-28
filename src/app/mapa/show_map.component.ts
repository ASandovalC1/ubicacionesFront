import { Component } from '@angular/core';
import { Ubicaciones } from '../models/ubicaciones';
import { UbicacionesService } from '../service/ubicaciones.service';

@Component({
  selector: 'app-show-map',
  templateUrl: './show_map.component.html',
  styleUrls: ['./show_map.component.scss']
})
export class ShowMapComponent {
  title = 'Mapa';

  position = {
    lat: 4.60971,
    lng: -74.08175
  };

  label = {
    color: 'blue',
    text: 'Aqui estoy'
  };

  iconBlue = {
    url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
  }

  icons = {
    blueIcon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
    greenIcon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
    redIcon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
  }

  // lista vacia de ubicaciones
  lista_ubicaciones: Ubicaciones[] = [];
  markers = [
    {
      position: {
        lat: 4.60971,
        lng: -74.08175
      },
      label: {
        color: 'blue',
        text: 'Aqui estoy'
      },
      title: 'Ubicacion 1',
      info: 'Informacion de la ubicacion 1',
      options: {animation: google.maps.Animation.BOUNCE}
    },
    {
      position: {
        lat: 4.6569,
        lng: -74.0467
      },
      label: {
        color: 'red',
        text: 'Aqui estoy'
      },
      title: 'Ubicacion 2',
      info: 'Informacion de la ubicacion 2',
      options: {animation: google.maps.Animation.BOUNCE}
    }
  ];

  markersAuto = [
    {
      position: {
        lat: 0,
        lng: 0
      },
      icon: this.icons.blueIcon,
      title: '',
      info: '',
      options: {animation: google.maps.Animation.BOUNCE}
    }
  ];


  color: string ="";

  constructor(private ubicacionesService: UbicacionesService) { }

  private getUbicaciones(): void{
    // console.log("getUbicaciones");
    this.ubicacionesService.getUbicaciones().subscribe( dato => {
      // dato.forEach(element => {
      //   console.log(element)
      //   this.lista_ubicaciones.push(element);
      // });
      this.lista_ubicaciones = dato;

      console.log("Mapas: "+this.lista_ubicaciones);
      for (let index = 0; index < this.lista_ubicaciones.length; index++) {
        const element = this.lista_ubicaciones[index];
        console.log(element);

        if(element.temperatura<13)
        {
          this.color = this.icons.blueIcon;
        }
        else if(element.temperatura>=13 && element.temperatura<=16)
        {
          this.color = this.icons.greenIcon;
        }
        else if(element.temperatura>16){
          this.color = this.icons.redIcon;
        }
        this.markersAuto.push({
          position: {
            lat: Number(element.latitud),
            lng: Number(element.longitud)
          },
          icon: this.color,
          title: element.nombre_estacion,
          info: 'Informacion de la ubicacion 2',
          options: {animation: google.maps.Animation.BOUNCE}
        });
      }
    }
    );
  }



  ngOnInit(){
    this.getUbicaciones();
  }


}
