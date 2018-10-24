import { Component, OnInit, Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';

export function passwordMatcher(a: AbstractControl) {
  if (!a.get('password') || !a.get('confirm')) {
    return null;
  }

  return a.get('password').value === a.get('confirm').value ? null : { 'no-match': false };
}

@Directive({
  selector: '[appPasswordMatcher]',
  providers: [{ provide: NG_VALIDATORS, multi: true, useValue: passwordMatcher }]
})
export class PasswordMatcherDirective {}

@Component({
  selector: 'app-declarative-form',
  templateUrl: './declarative-form.component.html',
  styleUrls: ['./declarative-form.component.css']
})
export class DeclarativeFormComponent implements OnInit {
  first = 'Vivek';
  last = 'Kumar';

  constructor() {}

  ngOnInit() {}
}
