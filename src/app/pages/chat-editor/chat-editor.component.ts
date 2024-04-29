import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ChatsService } from 'src/app/services/chats.service';

@Component({
  selector: 'app-chat-editor',
  templateUrl: './chat-editor.component.html',
  styleUrls: ['./chat-editor.component.scss']
})
export class ChatEditorComponent implements OnInit {

  public chatForm: FormGroup;

  constructor(public formBuilder: FormBuilder, private chatsService: ChatsService) {
    this.chatForm = this.formBuilder.group({
      mensaje: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ])
    })
  }

  ngOnInit(): void {
  }

  enviarMensaje() {
    const newMessage = this.chatForm.value;

    if (!this.chatForm.valid) {
      alert('Debe completar los campos necesarios');
      return;
    }

    // console.log(this.chatForm.valid);
    console.log('El mensaje a enviar es: ', newMessage.mensaje);

    this.chatsService.agregarChat(newMessage.mensaje);

    this.chatForm.reset();
  }

}
