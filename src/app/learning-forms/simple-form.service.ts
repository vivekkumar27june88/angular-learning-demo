import { Injectable } from '@angular/core';
import { Employee } from './simple-form/employee.model';
import { of, from } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class SimpleFormService {
  postEmployeeForm(employee: Employee) {
    return of({ msg: 'form submitted successfully.' }).pipe(delay(2000));
  }
}
