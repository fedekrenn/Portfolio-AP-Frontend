import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skills';


@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  ENDPOINT = 'http://localhost:8080/skills/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(this.ENDPOINT + 'lista');
  }

  public detail(id: number): Observable<Skill> {
    return this.httpClient.get<Skill>(this.ENDPOINT + `detail/${id}`);
  }

  public save(skills: Skill): Observable<any> {
    return this.httpClient.post<any>(this.ENDPOINT + 'create', skills);
  }

  public update(id: number, skills: Skill): Observable<any> {
    return this.httpClient.put<any>(this.ENDPOINT + `update/${id}`, skills);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.ENDPOINT + `delete/${id}`);
  }
}
