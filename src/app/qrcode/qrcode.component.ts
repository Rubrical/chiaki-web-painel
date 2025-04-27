import { Component, OnDestroy, OnInit } from '@angular/core';
import { io, Socket } from "socket.io-client";

@Component({
  selector: 'app-qrcode',
  standalone: true,
  imports: [],
  templateUrl: './qrcode.component.html',
  styleUrl: './qrcode.component.sass'
})
export class QrcodeComponent implements OnInit, OnDestroy {
  private socket: Socket;
  qrCode: string | null = null;
  qrImageUrl: string = '';

  constructor() {
    // Conectar ao seu backend
    this.socket = io('http://localhost:3001');
  }

  ngOnInit(): void {
    // this.socket.on('qr', (qrBase64: string) => {
    //   console.log(qrBase64);
    //   this.qrImageUrl = `data:image/png;base64,${qrBase64}`;
    // });
    this.socket.on('qr', (qrString: string) => {
      this.qrCode = qrString;
      this.qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(qrString)}`;
    });
  }

  ngOnDestroy(): void {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}
