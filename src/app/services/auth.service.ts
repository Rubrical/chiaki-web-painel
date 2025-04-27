import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { backendUrl } from '../app.config';

export interface Root {
  username?: string;
  password?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string|null = localStorage.getItem('token');
  private thereIsRoot: boolean = false;
  private readonly baseUrl = "root";
  private readonly routes = {
    check: `${backendUrl}/${this.baseUrl}/check-if-exists`,
    new: `${backendUrl}/${this.baseUrl}/new`,
    update: `${backendUrl}/${this.baseUrl}/update`,
    login: `${backendUrl}/${this.baseUrl}/login`
  }
  constructor(private http: HttpClient) { }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  getToken(): string | null {
    return this.token;
  }

  login(root: Root): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(this.routes.login, root);
  }

  signup(root: Root): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(this.routes.new, root);
  }

  checkRootExists(): Observable<boolean> {
    return this.http.get<boolean>(this.routes.check);
  }
}
