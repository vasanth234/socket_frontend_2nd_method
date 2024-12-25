import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketserviceService {

  private socket;

  constructor() {
    this.socket = io('https://socket-backend-2nd-method.onrender.com'); // Replace with your server URL
  }

  emit(event: string, data?: any) {
    this.socket.emit(event, data);
  }

  on(event: string, callback: (data: any) => void) {
    this.socket.on(event, callback);
  }

  disconnect() {
    this.socket.disconnect();
  }
}
