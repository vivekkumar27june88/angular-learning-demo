import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SimpleFormService } from './simple-form.service';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import {
  DeclarativeFormComponent,
  PasswordMatcherDirective
} from './declarative-form/declarative-form.component';
import { NestedFormComponent } from './nested-form/nested-form.component';

const ROUTES: Routes = [
  { path: '', component: SimpleFormComponent, pathMatch: 'full' },
  { path: 'registration-form', component: RegistrationFormComponent },
  { path: 'registration-form-declarative', component: DeclarativeFormComponent }
];

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(ROUTES)],
  declarations: [
    SimpleFormComponent,
    RegistrationFormComponent,
    DeclarativeFormComponent,
    PasswordMatcherDirective,
    NestedFormComponent
  ],
  providers: [SimpleFormService]
})
export class LearningFormsModule {}
