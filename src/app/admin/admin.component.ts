import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { juegos } from 'src/app/models/juegos';
import { ActivatedRoute, Routes, RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { JuegosService } from 'src/app/services/juegos.service';
import { registro } from '../models/registro';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public registro = [];

  constructor(private activar: ActivatedRoute, private juegosservicio: JuegosService, private ruta: Router, private base: FirebaseService,) { }

  ngOnInit() {
    this.base.tomartodo().subscribe((snapshotChanges) => {

      this.base.tomartodo().subscribe(data => {
        this.registro = data.map(e => {
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data()
          } as registro;
        });
      });
        
    });
  }
}
