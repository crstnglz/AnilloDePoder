import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../../servicios/personajes-service';

@Component({
  selector: 'app-buscar-personaje',
  imports: [],
  templateUrl: './buscar-personaje.html',
  styleUrl: './buscar-personaje.css',
})
export class BuscarPersonaje implements OnInit {

  personajes: any [] = []
  error = ''

  constructor(private buscarPersonaje: PersonajesService){}

  ngOnInit(): void
  {
    this.cargarPersonajes()
  }

  cargarPersonajes()
  {
    this.buscarPersonaje.buscarPersonajes().subscribe({
      next: data => {
        this.personajes = data
      }, error: err => {
        this.error = 'Se ha producido un error'
      }
    })
  }
}
