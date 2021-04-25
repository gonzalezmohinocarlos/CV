import { Component, OnInit } from '@angular/core';
import { Curso } from '../../interfaces/cv.interfaces';

@Component({
  selector: 'app-formador',
  templateUrl: './formador.component.html',
  styleUrls: ['./formador.component.css']
})
export class FormadorComponent implements OnInit {

  nombre: string ="Docente / Formador";
  
  cursos: Curso[] = [
    {titulo: "marketing digital, desarrollo páginas web, desarrollo apps móviles, cloud computing",
    descripcion: "Google Actívate (2020-2021)"},
    
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
