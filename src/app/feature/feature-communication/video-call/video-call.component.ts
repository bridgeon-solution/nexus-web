import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { CommunicationService } from 'src/app/core/services/communication.service';

@Component({
  selector: 'app-video-call',
  templateUrl: './video-call.component.html',
  styleUrls: ['./video-call.component.css']
})
export class VideoCallComponent implements OnInit {
  @ViewChild('root') root!: ElementRef;
  appID: number = 1007156665; // Replace with your AppID
  appSign: string = '926de15d82077d955e82c1321409f74e4b9e1140e9f7f27dc8852c7ab7de6172'; // Replace with your AppSign
  roomID: string = localStorage.getItem('id'); // Unique Room ID for the group call
  serverSecret: string = 'c1a43ab0ae5775d337457e8fb600baa7';

  constructor(private communicationService: CommunicationService) { }

  ngOnInit(): void {
    // this.startCall()
  }

  ngAfterViewInit(): void {
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      this.appID,
      this.serverSecret,
      this.roomID,
      Date.now().toString(),
      Date.now().toString()
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: this.root.nativeElement,
      sharedLinks: [
        {
          name: 'Prsonal Link',
          url: window.location.protocol + '//' + window.location.host + window.location.pathname + '?roomID=' + this.roomID
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall
      }
    });
  }

  startCall() {
    // this.communicationService.videoCallTokenGeneration().subscribe((res: { status: string, token: string }) => {
    //   console.log(res.token);
    //   const zgUIKit = ZegoUIKitPrebuilt.create(res.token);
    //   zgUIKit.joinRoom({
    //     container: this.root.nativeElement,
    //     sharedLinks: [
    //       {
    //         name: 'Prsonal-Link',
    //         url: window.location.protocol + '//' + window.location.host + window.location.pathname + '?roomID=' + this.roomID
    //       },
    //     ],
    //     scenario: {
    //       mode: ZegoUIKitPrebuilt.GroupCall
    //     }
    //   });
    // })

  }
}








// const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
//   this.appID,
//   this.serverSecret,
//   'UDG',
//   Date.now().toString()
// );
// console.log(kitToken);
// const zp = ZegoUIKitPrebuilt.create(kitToken);

// zp.joinRoom({
//   container: this.root.nativeElement,
//   sharedLinks: [
//     {
//       name: 'Prsonal Link',
//       url: window.location.protocol + '//' + window.location.host + window.location.pathname + '?roomID=' + this.roomID
//     },
//   ],
//   scenario: {
//     mode: ZegoUIKitPrebuilt.GroupCall
//   }
// });
