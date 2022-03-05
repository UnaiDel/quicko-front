import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr-generator',
  templateUrl: './qr-generator.component.html',
  styleUrls: ['./qr-generator.component.css']
})
export class QrGeneratorComponent implements OnInit {
/**
 * PARA MAS INFORMACION https://remotestack.io/angular-qr-code-generator-tutorial-with-example/
 */
  item = [{
    'name': 'Agatha Harkness',
    'played by': 'Kathryn Hahn',
    'Fictional universe': 'Marvel Universe',
    'Creator': 'Stan Lee'
  }]

  qrInfo = JSON.stringify(this.item);

  constructor() { }

  ngOnInit(): void {
  }

}
