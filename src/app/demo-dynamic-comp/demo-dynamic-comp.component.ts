import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  AfterViewInit,
  ComponentFactoryResolver,
  Injector,
  Type
} from '@angular/core';

import { ErrorToastComponent } from '../error-toast/error-toast.component';
import { WarningToastComponent } from '../warning-toast/warning-toast.component';
import { SuccessToastComponent } from '../success-toast/success-toast.component';

@Component({
  selector: 'app-demo-dynamic-comp',
  templateUrl: './demo-dynamic-comp.component.html',
  styleUrls: ['./demo-dynamic-comp.component.css']
})
export class DemoDynamicCompComponent implements OnInit, AfterViewInit {
  @ViewChild('toastViewContainerRef', { read: ViewContainerRef })
  toastViewContainerRef: ViewContainerRef;

  toastType = 'success';

  constructor(private cfr: ComponentFactoryResolver, private injector: Injector) {}

  ngOnInit() {}

  ngAfterViewInit() {}

  createDynamicComponent() {
    const factory = this.cfr.resolveComponentFactory(this.getComponent());
    const componentRef = factory.create(this.injector);
    console.log(componentRef);
    if ( this.toastViewContainerRef.length > 0) {
      this.toastViewContainerRef.clear();
    }
    this.toastViewContainerRef.insert(componentRef.hostView);
    componentRef.instance['msg'] = `Settng ${this.toastType} Message at the time of creation`;
  }

  private getComponent() {
    let component: Type<any>;

    switch (this.toastType) {
      case 'success':
        component = WarningToastComponent;
        this.toastType = 'warning';
        break;

      case 'warning':
        component = ErrorToastComponent;
        this.toastType = 'error';
        break;

      case 'error':
        component = SuccessToastComponent;
        this.toastType = 'success';
        break;
    }

    return component;
  }
}
