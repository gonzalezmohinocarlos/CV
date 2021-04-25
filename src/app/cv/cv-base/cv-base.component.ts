import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Curso } from '../interfaces/cv.interfaces';

@Component({
  selector: 'app-cv-base',
  templateUrl: './cv-base.component.html',
  styleUrls: ['./cv-base.component.css']
})
export class CvBaseComponent implements OnInit {

  @Input () nombre: string = "";
  @Input () cursos: Curso[] = [];
  @Input () competencias1 = new Array();
  @Input () competencias2 = new Array();

  constructor() { }

  ngOnInit(): void {
  }

}
