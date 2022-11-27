export class Ubicaciones {
  id: number;
  nombre_estacion: string;
  longitud: string;
  latitud: string;
  temperatura: number;


  constructor(id:number, nombre_estacion:string, longitud:string, latitud:string, temperatura:number){
    this.id = id;
    this.nombre_estacion = nombre_estacion;
    this.longitud = longitud;
    this.latitud = latitud;
    this.temperatura = temperatura;
  }

}

