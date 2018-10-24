import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-toast',
  templateUrl: './success-toast.component.html',
  styleUrls: ['./success-toast.component.css']
})
export class SuccessToastComponent implements OnInit {
  public msg = 'Successful !!';

  constructor() {}

  ngOnInit() {}
}
