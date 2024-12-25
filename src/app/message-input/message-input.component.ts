import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.css']
})
export class MessageInputComponent {

  message: string = '';
  @Output() sendMessage = new EventEmitter<string>();

  onSend() {
    if (this.message.trim()) {
      this.sendMessage.emit(this.message); // Emit the message to the parent
      console.log(this.message);
      this.message = ''; // Clear the input field
    }
  }
}
