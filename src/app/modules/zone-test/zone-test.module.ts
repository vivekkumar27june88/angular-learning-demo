import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZoneOneComponent } from './zone-one/zone-one.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ZoneOneComponent
      }
    ])
  ],
  declarations: [ZoneOneComponent]
})
export class ZoneTestModule {}
