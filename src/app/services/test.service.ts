import { Injectable } from '@angular/core';

@Injectable()
export class TestService {
  constructor() {
    console.log('TCL: TestService -> constructor -> constructor', this);
  }
}
