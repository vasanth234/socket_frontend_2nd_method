import { Component, OnInit } from '@angular/core';
import { SocketserviceService } from '../socketservice.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messages: string[] = [];

  constructor(private socketService: SocketserviceService) {}

  ngOnInit() {
    this.socketService.on('new-message', (msg: string) => {
      this.messages.push(msg); // Push incoming messages into the array
    });
  }

  onSendMessage(message: string) {
    // Send the message to the socket server
    if (message.trim()) {
      this.socketService.emit('send-message', message);
    }
  }
}
