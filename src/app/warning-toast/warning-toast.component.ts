import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-toast',
  templateUrl: './warning-toast.component.html',
  styleUrls: ['./warning-toast.component.css']
})
export class WarningToastComponent implements OnInit {
  msg = '';

  constructor() {}

  ngOnInit() {}
}
