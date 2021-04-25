import { Component, OnInit } from '@angular/core';
import { Curso } from '../../interfaces/cv.interfaces';

@Component({
  selector: 'app-tecnico',
  templateUrl: './tecnico.component.html',
  styleUrls: ['./tecnico.component.css'],
  styles: [  ]
})
export class TecnicoComponent implements OnInit {
  
  nombre: string ="Técnico Informático";
  
  cursos: Curso[] = [
    {titulo: "Desarrollador web Full-stack",
    descripcion: "LinkedIn Learning (31h) (2021)"},

    {titulo: "metodología de proyectos de software con SCRUM",
    descripcion: "SEPE (16h) (2021)"},
      
    {titulo: "marketing digital, desarrollo páginas web, desarrollo apps móviles, cloud computing",
    descripcion: "Google Actívate (2020-2021)"},
    
    {titulo: "Formador Ocupacional",
    descripcion: "Laboriscity, C. Real (419h) (2007)"},

    {titulo: "Empleado de Oficina",
    descripcion: "AKD, Daimiel (799h) (2005-2006)"}
  ];
  
  competencias1 = new Array("google", "html", "css", "javascript");
  competencias2 = new Array("angular", "node", "net", "java");
   

  constructor() { }

  ngOnInit(): void {
  }

}
