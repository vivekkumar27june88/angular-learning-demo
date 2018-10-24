import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-toast',
  templateUrl: './error-toast.component.html',
  styleUrls: ['./error-toast.component.css']
})
export class ErrorToastComponent implements OnInit {
  msg = 'Error!!';
  constructor() {}

  ngOnInit() {}

}
