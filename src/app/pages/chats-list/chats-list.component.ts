import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Chat } from 'src/app/interfaces/chat';
import { ChatsService } from 'src/app/services/chats.service';

@Component({
  selector: 'app-chats-list',
  templateUrl: './chats-list.component.html',
  styleUrls: ['./chats-list.component.scss']
})
export class ChatsListComponent implements OnInit {
  public chatForm: FormGroup;

  constructor(public formBuilder: FormBuilder, private chatsService: ChatsService) {
    this.chatForm = this.formBuilder.group({
      nombre: new FormControl('', [
        Validators.required
      ]),
      documento: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required
      ])
    })
  }

  ngOnInit(): void {
  }


  onclickEvent() {
    let chat: Chat = this.chatForm.value.nombre;
    console.log('Desde el compnente chat-list: ', chat);
    this.chatsService.agregarChat(chat);
  }

}
