import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { LoginUsuario } from '../model/login-usuario';
import { NuevoUsuario } from '../model/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  ENDPOINT = 'http://localhost:8080/auth/';

  constructor(private httpClient: HttpClient) { }

  public newUser($newUser: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.ENDPOINT + 'newUser', $newUser);
  }

  public loginUser($user: LoginUsuario): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.ENDPOINT + 'login', $user);
  }
}

