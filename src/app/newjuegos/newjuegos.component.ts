import { Component, OnInit } from '@angular/core';
import { JuegosService } from 'src/app/services/juegos.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Routes } from '@angular/router';

import { juegos } from '../models/juegos';
@Component({
  selector: 'app-newjuegos',
  templateUrl: './newjuegos.component.html',
  styleUrls: ['./newjuegos.component.css']
})
export class NewjuegosComponent implements OnInit {

  size: 40;
  buscar;
  JuegosDetalles: juegos;

  arrayultimos: juegos[];
  constructor(private juegos: JuegosService, private ruta: Router, private activarruta: ActivatedRoute, private juegosservicio: JuegosService) { }

  ngOnInit() {

    this.juegos.getultimosjuegos()
      .subscribe(data => {
        this.arrayultimos = data['results'];
        console.log(this.arrayultimos);
      },
        error => { console.log(error) });


  }

  viewGame(juegos) {
    this.ruta.navigate(['/detalles', juegos.id]);
  }
  comprarGame(juegos) {
    this.ruta.navigate(['/comprar', juegos.id]);
  }
}