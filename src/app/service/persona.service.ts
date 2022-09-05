import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  
  ENDPOINT = 'http://localhost:8080/persona/';

  constructor(private http: HttpClient) { }

  public lista(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.ENDPOINT + 'lista');
  }

  public getPersona(): Observable<Persona> {
    return this.http.get<Persona>(this.ENDPOINT + 'traer-persona');
  }

  public detail(id: number): Observable<Persona> {
    return this.http.get<Persona>(this.ENDPOINT + `detail/${id}`);
  }

  public save(persona: Persona): Observable<any> {
    return this.http.post<any>(this.ENDPOINT + 'create', persona);
  }

  public update(id: number, persona: Persona): Observable<any> {
    return this.http.put<any>(this.ENDPOINT + `update/${id}`, persona);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(this.ENDPOINT + `delete/${id}`);
  }
}
