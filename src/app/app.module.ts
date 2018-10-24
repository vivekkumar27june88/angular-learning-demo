import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment.prod';
import { AppComponent } from './app.component';
import { DemoDynamicCompComponent } from './demo-dynamic-comp/demo-dynamic-comp.component';
import { DurationPipe } from './duration.pipe';
import { ErrorToastComponent } from './error-toast/error-toast.component';
import { ModalTriggerDirective } from './modal-trigger.directive';
import { NgTemplateOutletContextComponent } from './ng-template-outlet-context/ng-template-outlet-context.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { JQ_TOKEN } from './services/jquery.service';
import { TestService } from './services/test.service';
import { SimpleModalComponent } from './simple-modal/simple-modal.component';
import { SuccessToastComponent } from './success-toast/success-toast.component';
import { ViewContainerRefCompComponent } from './view-container-ref-comp/view-container-ref-comp.component';
import { ViewContentDemoModule } from './view-content-demo/view-content-demo.module';
import { WarningToastComponent } from './warning-toast/warning-toast.component';

const jQuery = window['$'];

const ROUTES: Routes = [
  {
    path: 'learning-forms',
    loadChildren: './learning-forms/learning-forms.module#LearningFormsModule'
  },
  {
    path: 'template-outlet',
    component: NgTemplateOutletContextComponent
  },
  {
    path: 'demo-dynamic-comp',
    component: DemoDynamicCompComponent
  },
  {
    path: 'state-management',
    loadChildren: './state-management/state-management.module#StateManagementModule'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'state-management'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DemoDynamicCompComponent,
    DurationPipe,
    ErrorToastComponent,
    ModalTriggerDirective,
    NgTemplateOutletContextComponent,
    PostComponent,
    PostsComponent,
    SimpleModalComponent,
    SuccessToastComponent,
    ViewContainerRefCompComponent,
    WarningToastComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ViewContentDemoModule,
    RouterModule.forRoot(ROUTES),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: 'REACTIVE_FORM_DEMO',
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [
    {
      provide: JQ_TOKEN,
      useValue: jQuery
    },
    TestService
  ],
  entryComponents: [SuccessToastComponent, WarningToastComponent, ErrorToastComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
