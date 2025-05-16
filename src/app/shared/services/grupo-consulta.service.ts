import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { backendUrl } from '../../app.config';
import { GroupReport } from '../models/group-report';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GrupoConsultaService {
  private readonly baseUrl = 'groups'
  private readonly routes = {
    getReport: (id: string) => `${backendUrl}/${this.baseUrl}/get-report/${id}`,
    getGroupMembers: (id: string) => `${backendUrl}/${this.baseUrl}/get-group-members-by-filter/${id}`,
    getGroupWelcomeMessage: (groupName: string) => `${backendUrl}/messages/welcome-message:${groupName}`,
    getGroupGoodbyeMessage: (groupName: string) => `${backendUrl}/messages/goodbye-message:${groupName}`,
  }

  constructor(private http: HttpClient) { }

  groupReport(id: string): Observable<GroupReport> {
    return this.http.get<GroupReport>(this.routes.getReport(id));
  }
}
