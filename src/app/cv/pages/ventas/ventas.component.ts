import { Component, OnInit } from '@angular/core';

import { Curso } from '../../interfaces/cv.interfaces';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  nombre: string ="Comercial de Ventas";

  cursos: Curso[] = [
    {titulo: "marketing digital",
    descripcion: "Google Actívate (40h) (2020-2021)"},
    
    {titulo: "prevención de riesgos laborales",
    descripcion: "(Básico) (2009)"},

    {titulo: "Formador Ocupacional",
    descripcion: "Laboriscity, C. Real (419h) (2007)"},

    {titulo: "Empleado de Oficina",
    descripcion: "AKD, Daimiel (799h) (2005-2006)"}
  ];

  competencias1 = new Array("google", "office", "photoshop", "skype");
  competencias2 = new Array("html", "css", "javascript", "java");
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
