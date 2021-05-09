import { Injectable } from '@angular/core';
import { Curso } from '../cv/interfaces/cv.interfaces';

@Injectable({
  providedIn: 'root'
})

export class PaginasService {

  constructor() { }

  setNombre(pagina: string):string{

    if (pagina == "Docente"){
      return "Docente / Formador";
    } else if (pagina == "Ventas"){
      return "Comercial de Ventas";
    } else { //Por defecto
      return "Técnico Informático";
    }
  }
  
  setCurso(pagina: string):Curso[]{

    if (pagina == "Docente"){
      return [
        {titulo: "marketing digital, desarrollo páginas web, desarrollo apps móviles, cloud computing",
        descripcion: "Google Actívate (2020-2021)"},
        
        {titulo: "prevención de riesgos laborales",
        descripcion: "(Básico) (2009)"},
    
        {titulo: "Formador Ocupacional",
        descripcion: "Laboriscity, C. Real (419h) (2007)"},
    
        {titulo: "Empleado de Oficina",
        descripcion: "AKD, Daimiel (799h) (2005-2006)"}
      ];
    } else if (pagina == "Ventas"){
      return [
        {titulo: "marketing digital",
        descripcion: "Google Actívate (40h) (2020-2021)"},
        
        {titulo: "prevención de riesgos laborales",
        descripcion: "(Básico) (2009)"},
    
        {titulo: "Formador Ocupacional",
        descripcion: "Laboriscity, C. Real (419h) (2007)"},
    
        {titulo: "Empleado de Oficina",
        descripcion: "AKD, Daimiel (799h) (2005-2006)"}
      ];
    } else {
      return [
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
    }
  }

  setCompetencias1(pagina: string):string[]{

    if (pagina == "Docente"){
      return new Array("google", "office", "photoshop", "skype");
    } else if (pagina == "Ventas"){
      return new Array("google", "office", "photoshop", "skype");
    } else{
      return new Array("google", "html", "css", "javascript");
    }  
  }

  setCompetencias2(pagina: string):string[]{

    if (pagina == "Docente"){
      return new Array("html", "css", "javascript", "java");
    } else if (pagina == "Ventas"){
      return new Array("html", "css", "javascript", "java");
    } else{
      return new Array("angular", "node", "net", "java");
    }  
  }

}
