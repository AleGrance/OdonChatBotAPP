import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { ChatsListComponent } from './pages/chats-list/chats-list.component';
import { ChatsViewComponent } from './pages/chats-view/chats-view.component';
import { ChatEditorComponent } from './pages/chat-editor/chat-editor.component';
import { ChatContentComponent } from './pages/chat-content/chat-content.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    UserInfoComponent,
    ChatsListComponent,
    ChatsViewComponent,
    ChatEditorComponent,
    ChatContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
