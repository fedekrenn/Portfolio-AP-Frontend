import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  // proyUrl = 'https://backkrenn.herokuapp.com/proyectos/';
  proyUrl = 'http://localhost:8080/proyectos/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Proyecto[]> {
    return this.httpClient.get<Proyecto[]>(this.proyUrl + 'lista');
  }

  public detail(id: number): Observable<Proyecto> {
    return this.httpClient.get<Proyecto>(this.proyUrl + `detail/${id}`);
  }

  public save(proyectos: Proyecto): Observable<any> {
    return this.httpClient.post<any>(this.proyUrl + 'create', proyectos);
  }

  public update(id: number, proyectos: Proyecto): Observable<any> {
    return this.httpClient.put<any>(this.proyUrl + `update/${id}`, proyectos);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.proyUrl + `delete/${id}`);
  }
}
