import { Injectable } from '@angular/core';
import { backendUrl } from '../../app.config';
import { HttpClient } from '@angular/common/http';
import { UserReport } from '../models/user-report';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private readonly baseUrl = "users";
  private readonly routes = {
    getUser: (id: string) => `${backendUrl}/${this.baseUrl}/get-user/${id}`,
  };

  constructor(private http: HttpClient) { }

  getUser(id: string) {
    return this.http.get<UserReport>(this.routes.getUser(id));
  }
}
