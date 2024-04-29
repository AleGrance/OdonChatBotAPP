import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/app/interfaces/chat';
import { ChatsService } from 'src/app/services/chats.service';

@Component({
  selector: 'app-chat-content',
  templateUrl: './chat-content.component.html',
  styleUrls: ['./chat-content.component.scss']
})
export class ChatContentComponent implements OnInit {
  public chatsArray: Chat[] = [];

  constructor(private chatsService: ChatsService) { }

  ngOnInit(): void {
    this.chatsService.obtenerChats.subscribe(result => {
      this.chatsArray = result;
      console.log('Los mensajes desde el compo chat-content:', result);
    })
  }

}
