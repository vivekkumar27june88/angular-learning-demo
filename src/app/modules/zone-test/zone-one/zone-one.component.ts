import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-zone-one',
  templateUrl: './zone-one.component.html',
  styleUrls: ['./zone-one.component.css']
})
export class ZoneOneComponent implements OnInit {
  public progress = 0;

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    // this.codeInsideZone();
    // this.normalCode();
  }

  normalCode() {
    this.progress = 0;
    let interval = null;
    interval = setInterval(() => (this.progress += 10), 200);
    setTimeout(() => {
      clearInterval(interval);
      interval = null;
    }, 3000);
  }

  codeInsideZone() {
    this.progress = 0;
    let interval = null;
    this.ngZone.runOutsideAngular(() => {
      interval = setInterval(() => (this.progress += 10), 200);
    });

    setTimeout(() => {
      clearInterval(interval);
      interval = null;
      this.ngZone.run(() => {
        console.log('Outside Done!');
      });
    }, 10000);
  }

}
