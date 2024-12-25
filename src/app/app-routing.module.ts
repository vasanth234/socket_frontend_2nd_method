import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageInputComponent } from './message-input/message-input.component';

const routes: Routes = [{
  path:'',
  component:ChatComponent
},
{
  path:'messageList',
  component:MessageListComponent
},
{
  path:'messageInput',
  component:MessageInputComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
