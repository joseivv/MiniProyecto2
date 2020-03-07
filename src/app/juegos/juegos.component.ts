import { Component, OnInit } from '@angular/core';
import { JuegosService } from 'src/app/services/juegos.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Routes } from '@angular/router';

import { juegos } from '../models/juegos';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {

 
  JuegosDetalles: juegos;
  page = 1;
  arrayultimos: juegos[];

  constructor(private juegos: JuegosService, private ruta: Router, private activarruta: ActivatedRoute,) { }

  ngOnInit() {

    this.juegos.getultimosjuegos().subscribe
    (data => {
        this.arrayultimos = data['results'];
      },
        error => { console.log(error) });
  }
  mas(){
    this.page = this.page +1 ;
    this.juegos.getnew(this.page).subscribe(
      data => {
        this.arrayultimos.push(...data['result']);
      }
    )
  }


  viewGame(juegos) {
    this.ruta.navigate(['/detalles', juegos.id]);
  }
  comprarGame(juegos) {
    this.ruta.navigate(['/comprar', juegos.id]);
  }
}