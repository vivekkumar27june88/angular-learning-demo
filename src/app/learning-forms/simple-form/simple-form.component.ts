import { Component, OnInit } from '@angular/core';
import { SimpleFormService } from '../simple-form.service';
import { Employee } from './employee.model';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {
  public languages = ['English', 'Spanish', 'Hindi', 'Other'];
  public model = new Employee('Vivek', 'Kumar', true, 'w2', 'default');
  public primaryLanguageIsInvalid = false;

  constructor(private simpleFormService: SimpleFormService) {}

  ngOnInit() {}

  public firstNameModelChanged(value: string) {
    if (value.length > 0) {
      this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
    }
  }

  public validatePrimaryLanguage(value) {
    if (value === 'default') {
      this.primaryLanguageIsInvalid = true;
    } else {
      this.primaryLanguageIsInvalid = false;
    }
  }

  public submitForm(simpleForm) {
    console.log({ simpleForm });

    this.validatePrimaryLanguage(this.model.primaryLanguage);
    if (this.primaryLanguageIsInvalid) {
      return;
    }

    this.simpleFormService
      .postEmployeeForm(this.model)
      .subscribe(formSubmitRes => console.log({ formSubmitRes }));
  }
}
