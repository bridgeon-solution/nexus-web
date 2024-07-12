import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-call',
  templateUrl: './video-call.component.html',
  styleUrls: ['./video-call.component.css']
})
export class VideoCallComponent implements OnInit {

  appID: number = 1007156665; // Replace with your AppID
  appSign: string = '926de15d82077d955e82c1321409f74e4b9e1140e9f7f27dc8852c7ab7de6172'; // Replace with your AppSign
  roomID: string = 'YOUR_ROOM_ID'; // Unique Room ID for the group call

  ngOnInit(): void {
    this.startCall()
  }

  startCall() {
    const userId: number = 5;
    
  }
}
