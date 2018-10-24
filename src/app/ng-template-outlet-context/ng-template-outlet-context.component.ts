import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-template-outlet-context',
  templateUrl: './ng-template-outlet-context.component.html',
  styleUrls: ['./ng-template-outlet-context.component.css']
})
export class NgTemplateOutletContextComponent implements OnInit {
  val = 1;

  constructor() {}

  ngOnInit() {
    setTimeout(() => (this.val = 2), 5000);
  }

  getDynamicContext() {
    if (this.val === 1) {
      return {
        message: 'Message is dependent on val : 1',
        name: 'Shreemita'
      };
    } else {
      return {
        message: 'Message is dependent on val : 2',
        name: 'Vivek'
      };
    }
  }
}
