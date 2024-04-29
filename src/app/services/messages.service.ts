import { Injectable } from '@angular/core';
import { Message } from '../interfaces/message';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private messagesList: Message[] = [];
  private _messages: BehaviorSubject<Message[]>;

  constructor() {
    this._messages = new BehaviorSubject<Message[]>([]);
  }

  // La funcion que carga el observable
  addMensaje(newMessage: Message) {
    //console.log('Mensaje recibido en messages service: ', newMessage);
    this.messagesList.push(newMessage);
    this._messages.next(this.messagesList);
  }

  // La funcion de suscripcion
  get getMessages() {
    return this._messages.asObservable();
  }
}
