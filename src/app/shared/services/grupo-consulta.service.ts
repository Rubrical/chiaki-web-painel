import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { backendUrl } from '../../app.config';
import { GroupReport } from '../models/group-report';
import { Observable } from 'rxjs';
import { GroupRank } from '../models/group-rank';

@Injectable({
  providedIn: 'root'
})
export class GrupoConsultaService {
  private readonly baseUrl = 'groups'
  private readonly routes = {
    getReport: (id: string) => `${backendUrl}/${this.baseUrl}/get-report/${id}`,
    getGroupMembers: (id: string) => `${backendUrl}/${this.baseUrl}/get-group-members-by-filter/${id}`,
    getRank: (id: string) => `${backendUrl}/${this.baseUrl}/get-most-active-members-from-group/${id}`,
  }

  constructor(private http: HttpClient) { }

  groupReport(id: string): Observable<GroupReport> {
    return this.http.get<GroupReport>(this.routes.getReport(id));
  }

  getRank(id: string, qty: number = 5) {
    return this.http.get<GroupRank[]>(this.routes.getRank(id), { params: { qty: qty } });
  }
}
