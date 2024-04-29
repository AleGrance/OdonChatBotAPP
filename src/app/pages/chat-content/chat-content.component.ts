import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/interfaces/message';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-chat-content',
  templateUrl: './chat-content.component.html',
  styleUrls: ['./chat-content.component.scss']
})
export class ChatContentComponent implements OnInit {
  public messagesArray: Message[] = [];

  constructor(private messagesService: MessagesService) { }

  ngOnInit(): void {
    // Se realiza la suscripcion al observable
    this.messagesService.getMessages.subscribe(result => {
      console.log('Estos son los mensajes recibidos, en el componente chat-content: ', result);
      this.messagesArray = result;
    })
  }

}
