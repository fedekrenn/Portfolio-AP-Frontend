import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skills';


@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  // skillsUrl = 'https://backkrenn.herokuapp.com/skills/';
  skillsUrl = 'http://localhost:8080/skills/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(this.skillsUrl + 'lista');
  }

  public detail(id: number): Observable<Skill> {
    return this.httpClient.get<Skill>(this.skillsUrl + `detail/${id}`);
  }

  public save(skills: Skill): Observable<any> {
    return this.httpClient.post<any>(this.skillsUrl + 'create', skills);
  }

  public update(id: number, skills: Skill): Observable<any> {
    return this.httpClient.put<any>(this.skillsUrl + `update/${id}`, skills);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.skillsUrl + `delete/${id}`);
  }
}
