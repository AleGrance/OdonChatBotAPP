import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Message } from 'src/app/interfaces/message';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-chat-editor',
  templateUrl: './chat-editor.component.html',
  styleUrls: ['./chat-editor.component.scss']
})
export class ChatEditorComponent implements OnInit {

  public chatForm: FormGroup;

  constructor(public formBuilder: FormBuilder, private messagesService: MessagesService) {
    this.chatForm = this.formBuilder.group({
      mensaje: new FormControl('', [
        Validators.required,
        Validators.minLength(1)
      ])
    })
  }

  ngOnInit(): void {
  }

  enviarMensaje(evento: any) {
    // console.log(evento);
    if (evento.key == 'Enter' || evento.type == 'click') {
      evento.preventDefault();
      const newMessage: Message = {
        texto: this.chatForm.value.mensaje,
        fecha_hora: new Date(),
        from_id: 1
      }

      if (!this.chatForm.valid) {
        //alert('Debe completar los campos necesarios');
        return;
      }

      this.messagesService.addMensaje(newMessage);

      this.chatForm.reset();
    }
  }

}
