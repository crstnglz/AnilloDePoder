import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../../servicios/personajes-service';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar-personaje',
  imports: [ButtonModule, FormsModule],
  templateUrl: './buscar-personaje.html',
  styleUrl: './buscar-personaje.css',
})
export class BuscarPersonaje implements OnInit {

  personajes: any [] = []
  error = ''

  constructor(private personajeService: PersonajesService, private router: Router){}

  ngOnInit(): void
  {
    this.cargarPersonajes()
  }

  cargarPersonajes()
  {
    this.personajeService.obtenerPersonajes().subscribe({
      next: (data) => {
        this.personajes = data
      }, error: (err) => {
        this.error = 'Se ha producido un error'
      }
    })
  }

  editar(id: number)
  {
    this.router.navigate(['/editar', id])
  }
}
