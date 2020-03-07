import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { juegos } from 'src/app/models/juegos';
import { ActivatedRoute, Routes, RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { JuegosService } from 'src/app/services/juegos.service';
import { registro } from '../models/registro';
import { FirebaseService } from '../services/firebase.service';


@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {

  Juegoss: juegos;

  RegisterForm: FormGroup;
  constructor(private activar: ActivatedRoute, private juegosservicio: JuegosService, private ruta: Router, private base: FirebaseService,
  ) { }

  ngOnInit() {
    this.RegisterForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', Validators.required),
      lugar: new FormControl('', Validators.required),
      cedula: new FormControl('', Validators.required)});
      
    this.activar.params
      .subscribe(params => {

        let game_id = params['id'];

        this.juegosservicio.getdetalles(game_id)
          .subscribe((data: juegos) => {
            this.Juegoss = data;
            console.log(this.Juegoss);
          });
      });  
  }
  onSumit(){

    const registrico ={
      name: this.RegisterForm.value.name,
      cedula: this.RegisterForm.value.cedula,
      lugar: this.RegisterForm.value.lugar,
      email: this.RegisterForm.value.email,
    }
    // const name = this.RegisterForm.value.name;
    // const email = this.RegisterForm.value.email;
    // const lugar = this.RegisterForm.value.lugar;
    // const cedula = this.RegisterForm.value.lugar;
    // const registrico = new registro(name, email, lugar, cedula);
    this.base.crear(registrico);    
    this.ruta.navigate['/juegos'];
  }

  
}
