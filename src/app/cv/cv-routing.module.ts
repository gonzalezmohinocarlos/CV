import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VentasComponent } from './pages/ventas/ventas.component';
import { TecnicoComponent } from './pages/tecnico/tecnico.component';
import { FormadorComponent } from './pages/formador/formador.component';

const routes: Routes = [
  {
    path:'',
    children:[
      { path: 'ventas', component: VentasComponent },
      { path: 'tecnico', component: TecnicoComponent },
      { path: 'formador', component: FormadorComponent },
      { path: '**', redirectTo: 'tecnico' }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CvRoutingModule { }
