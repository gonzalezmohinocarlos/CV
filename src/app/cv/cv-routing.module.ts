import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CvBaseComponent } from './pages/cv-base/cv-base.component';

const routes: Routes = [
  {
    path:'',
    children:[
      { path: 'ventas', component: CvBaseComponent, data: {pagina:'Ventas'} },
      { path: 'tecnico', component: CvBaseComponent, data: {pagina:'Tecnico'} },
      { path: 'formador', component: CvBaseComponent, data: {pagina:'Docente'} },
      { path: '**', redirectTo: 'tecnico' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CvRoutingModule { }
