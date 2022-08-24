import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../model/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  proyUrl = 'https://backkrenn.herokuapp.com/proyectos/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Proyectos[]> {
    return this.httpClient.get<Proyectos[]>(this.proyUrl + 'lista');
  }

  public detail(id: number): Observable<Proyectos> {
    return this.httpClient.get<Proyectos>(this.proyUrl + `detail/${id}`);
  }

  public save(proyectos: Proyectos): Observable<any> {
    return this.httpClient.post<any>(this.proyUrl + 'create', proyectos);
  }

  public update(id: number, proyectos: Proyectos): Observable<any> {
    return this.httpClient.put<any>(this.proyUrl + `update/${id}`, proyectos);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.proyUrl + `delete/${id}`);
  }
}
