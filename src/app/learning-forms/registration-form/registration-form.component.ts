import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';

function passwordMatcher(a: AbstractControl) {
  return a.get('password').value === a.get('confirm').value ? null : { 'no-match': false };
}

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  /*
  form = new FormGroup({
    first: new FormControl(),
    last: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
    confirm: new FormControl(),
    newsletter: new FormControl()
  });
  */

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      first: '',
      last: '',
      account: this.fb.group(
        {
          username: '',
          password: ['', Validators.required],
          confirm: ['', Validators.required]
        },
        { validator: passwordMatcher }
      ),
      newsletter: ''
    });

    this.form.patchValue({
      first: 'Vivek',
      last: 'Kumar'
    });
  }

  ngOnInit() {}
}
