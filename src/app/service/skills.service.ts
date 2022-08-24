import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../model/skills';


@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  skillsUrl = 'https://backkrenn.herokuapp.com/skills/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Skills[]> {
    return this.httpClient.get<Skills[]>(this.skillsUrl + 'lista');
  }

  public detail(id: number): Observable<Skills> {
    return this.httpClient.get<Skills>(this.skillsUrl + `detail/${id}`);
  }

  public save(skills: Skills): Observable<any> {
    return this.httpClient.post<any>(this.skillsUrl + 'create', skills);
  }

  public update(id: number, skills: Skills): Observable<any> {
    return this.httpClient.put<any>(this.skillsUrl + `update/${id}`, skills);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.skillsUrl + `delete/${id}`);
  }
}
