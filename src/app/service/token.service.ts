import { Injectable } from '@angular/core';

const TOKEN_KEY = 'tokenAuth';
const USER_KEY = 'userAuth';
const AUTHORITIES_KEY = 'authoritiesAuth';

@Injectable({
  providedIn: 'root'
})

export class TokenService {
  roles: Array<string> = [];
  constructor() { }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY) || '';
  }

  public saveUser(user: string): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, user);
  }

  public getUser(): string {
    return sessionStorage.getItem(USER_KEY) || '';
  }

  public saveAuthorities(authorities: string[]): void {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  public getAuthorities(): string[] {
    this.roles = [];
    if (sessionStorage.getItem(AUTHORITIES_KEY)) {
      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY) || '').forEach((auth: any) => {
        this.roles.push(auth.authority);
      });
    }
    return this.roles;
  }

  public logout(): void {
    window.sessionStorage.clear();
  }
}

