import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvRoutingModule } from './cv-routing.module';

import { CvBaseComponent } from './pages/cv-base/cv-base.component';


@NgModule({
  declarations: [
    CvBaseComponent
  ],
  imports: [
    CommonModule,
    CvRoutingModule
  ],
  exports: []
})
export class CvModule { }
