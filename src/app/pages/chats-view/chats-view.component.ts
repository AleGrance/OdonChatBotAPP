import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/app/interfaces/chat';
import { ChatsService } from 'src/app/services/chats.service';

@Component({
  selector: 'app-chats-view',
  templateUrl: './chats-view.component.html',
  styleUrls: ['./chats-view.component.scss']
})
export class ChatsViewComponent implements OnInit {
  chatArray: Chat[] = [];

  constructor(private chatsService: ChatsService) { }

  ngOnInit(): void {
    this.chatsService.obtenerChats.subscribe((losChats) => {
      this.chatArray = losChats;
      console.log('Obteninendo los chats desde el observable: ', losChats);
    })
  }

}
