import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { PaginasService } from 'src/app/services/paginas.service';
import { Curso } from '../../interfaces/cv.interfaces';

@Component({
  selector: 'app-cv-base',
  templateUrl: './cv-base.component.html',
  styleUrls: ['./cv-base.component.css']
})

export class CvBaseComponent implements OnDestroy {

  public tituloSubs$: Subscription;

  public nombre: string = "";
  public cursos: Curso[]=[];
  public competencias1: string[] = [];
  public competencias2: string[] = [];

  constructor( private router: Router,
               private paginasService: PaginasService) {

    this.tituloSubs$ = this.getArgumentosRuta()
        .subscribe( ({pagina}) => {
          console.log(pagina);
          this.nombre = paginasService.setNombre(pagina);
          this.cursos = paginasService.setCurso(pagina);
          this.competencias1 = paginasService.setCompetencias1(pagina);
          this.competencias2 = paginasService.setCompetencias2(pagina);
        });;
  }

  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();    
  }

  getArgumentosRuta() {

    return this.router.events.pipe(
        filter(( event): event is ActivationEnd => event instanceof ActivationEnd ),
        filter( (event: ActivationEnd) => event.snapshot.firstChild === null  ),
        map( (event: ActivationEnd) => event.snapshot.data ),
      );
  }
}
