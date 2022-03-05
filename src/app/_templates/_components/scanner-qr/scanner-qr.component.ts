import { Component, OnInit, ViewChild } from '@angular/core';
import {QrScannerComponent} from 'angular2-qrscanner';
@Component({
  selector: 'app-scanner-qr',
  templateUrl: './scanner-qr.component.html',
  styleUrls: ['./scanner-qr.component.css']
})
export class ScannerQrComponent implements OnInit {



  @ViewChild(QrScannerComponent,{ static: true }) qrScannerComponent!: QrScannerComponent ;

  
  ngOnInit() {

   //  *** Use this code, if you want to define the used device ***
     this.qrScannerComponent.getMediaDevices().then(devices => {
         console.log(devices);
         const videoDevices: MediaDeviceInfo[] = [];
         for (const device of devices) {
             if (device.kind.toString() === 'videoinput') {
                 videoDevices.push(device);
             }
         }
         if (videoDevices.length > 0){
             let choosenDev;
             for (const dev of videoDevices){
                 if (dev.label.includes('front')){
                     choosenDev = dev;
                     break;
                 }
             }
             if (choosenDev) {
                 this.qrScannerComponent.chooseCamera.next(choosenDev);
             } else {
                 this.qrScannerComponent.chooseCamera.next(videoDevices[0]);
             }
         }
     });

  this.qrScannerComponent.capturedQr.subscribe((result: any) => {
        console.log(result);
         this.qrScannerComponent.stopScanning();
    });



}

ngAfterViewInit() {
   //  *** Use this code, if you want the user to decide, which camera to use
   // this.qrScannerComponent.startScanning(null);
}
}