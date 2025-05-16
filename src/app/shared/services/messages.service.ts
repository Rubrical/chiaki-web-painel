import { Injectable } from '@angular/core';
import { backendUrl } from '../../app.config';
import { HttpClient } from '@angular/common/http';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private readonly baseUrl = "messages";
  private readonly routes = {
    getGroupWelcomeMessage: (groupName: string) => `${backendUrl}/${this.baseUrl}/welcome-message:${groupName}`,
    getGroupGoodbyeMessage: (groupName: string) => `${backendUrl}/${this.baseUrl}/goodbye-message:${groupName}`,
  }
  constructor(private http: HttpClient) { }

  getWelcomeMessage(groupName: string) {
    return this.http.get<Message>(this.routes.getGroupWelcomeMessage(groupName));
  }

  getGoodbyeMessage(groupName: string) {
    return this.http.get<Message>(this.routes.getGroupGoodbyeMessage(groupName));
  }
}
