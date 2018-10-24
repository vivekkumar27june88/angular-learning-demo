import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';

@NgModule({
  imports: [CommonModule],
  exports: [ParentComponent, ChildComponent],
  declarations: [ParentComponent, ChildComponent]
})
export class ViewContentDemoModule {}
