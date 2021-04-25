import { Component } from '@angular/core';

interface MenuItem{
  ruta: string,
  texto: string
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`
  li{
   cursor: pointer;
  }
`
  ]
})

export class MenuComponent {

  menu: MenuItem[]=[
    { ruta: '/formador', texto: 'Formador'},
    { ruta: '/tecnico', texto: 'Técnico'},
    { ruta: '/ventas', texto: 'Ventas'}
  ];
}
