import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ubicaciones } from '../models/ubicaciones';

@Injectable({
  providedIn: 'root'
})
export class UbicacionesService {

  ubicacionesURL = 'http://localhost:8080/api/Ubicaciones/';

  constructor(private httpClient : HttpClient) {}

    public getUbicaciones(): Observable<Ubicaciones[]>{
      return this.httpClient.get<Ubicaciones[]>(this.ubicacionesURL + 'all', {responseType: 'json'});
    }

    public save(ubicaciones: Ubicaciones): Observable<Ubicaciones>{
      return this.httpClient.post<any>(this.ubicacionesURL + 'save', ubicaciones);
    }

    public update(ubicaciones: Ubicaciones): Observable<Ubicaciones>{
      return this.httpClient.put<any>(this.ubicacionesURL + 'update', ubicaciones);
    }

    public delete(id: number): Boolean{
      this.httpClient.delete<any>(this.ubicacionesURL + `delete/${id}`).subscribe(
        response => {
          console.log(response);
        }
      );
      return true;
    }

}
