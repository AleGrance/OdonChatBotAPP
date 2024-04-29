import { Injectable } from '@angular/core';
import { Chat } from '../interfaces/chat';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  private chatList: Chat[] = [];
  private _chats: BehaviorSubject<Chat[]>;

  constructor() {
    this._chats = new BehaviorSubject<Chat[]>([]);
  }

  // A esta funcion se realiza la suscripcion
  get obtenerChats() {
    return this._chats.asObservable();
  }

  agregarChat(chat: Chat) {
    console.log('Desde el service chat.service: ', chat);
    this.chatList.push(chat);
    this._chats.next(this.chatList);
  }
}
