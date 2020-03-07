import { Component, OnInit } from '@angular/core';
import { juegos } from 'src/app/models/juegos';
import { JuegosService } from 'src/app/services/juegos.service';
import { ActivatedRoute, Routes } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  JuegosDetalles: juegos;
  trailers: [];
  fotos: any;

  constructor(private activarruta: ActivatedRoute, private juegosservicio: JuegosService, private ruta: Router
  ) { }

  ngOnInit() {
    this.activarruta.params
      .subscribe(params => {

        let game_id = params['id'];

        this.juegosservicio.getdetalles(game_id)
          .subscribe((data: juegos) => {
            this.JuegosDetalles = data;
            console.log(this.JuegosDetalles);
          });

        this.juegosservicio.getTrailers(game_id).subscribe((data) => {
          this.trailers = data['results'];
        });

        this.juegosservicio.getfotos(game_id).subscribe((data) => {
          this.fotos = data['results'];
        });

      });   
  }
      comprarGame() {
        this.ruta.navigate(['/comprar', this.JuegosDetalles.id]);
      }
}
