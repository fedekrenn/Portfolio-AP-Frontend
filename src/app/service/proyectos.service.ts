import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  ENDPOINT = 'http://localhost:8080/proyectos/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Proyecto[]> {
    return this.httpClient.get<Proyecto[]>(this.ENDPOINT + 'lista');
  }

  public detail(id: number): Observable<Proyecto> {
    return this.httpClient.get<Proyecto>(this.ENDPOINT + `detail/${id}`);
  }

  public save(proyectos: Proyecto): Observable<any> {
    return this.httpClient.post<any>(this.ENDPOINT + 'create', proyectos);
  }

  public update(id: number, proyectos: Proyecto): Observable<any> {
    return this.httpClient.put<any>(this.ENDPOINT + `update/${id}`, proyectos);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.ENDPOINT + `delete/${id}`);
  }
}
