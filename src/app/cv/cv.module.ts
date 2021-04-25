import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvRoutingModule } from './cv-routing.module';

import { FormadorComponent } from './pages/formador/formador.component';
import { TecnicoComponent } from './pages/tecnico/tecnico.component';
import { VentasComponent } from './pages/ventas/ventas.component';
import { CvBaseComponent } from './cv-base/cv-base.component';


@NgModule({
  declarations: [
    FormadorComponent,
    TecnicoComponent,
    VentasComponent,
    CvBaseComponent
  ],
  imports: [
    CommonModule,
    CvRoutingModule
  ],
  exports : []
})
export class CvModule { }
