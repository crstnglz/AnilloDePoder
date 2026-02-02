import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonajesService } from '../../servicios/personajes-service';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar-personaje',
  imports: [ButtonModule, FormsModule, CommonModule],
  templateUrl: './buscar-personaje.html',
  styleUrl: './buscar-personaje.css',
})
export class BuscarPersonaje implements OnInit {

  personajes: any [] = []
  error = ''

  constructor(
    private personajeService: PersonajesService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ){}

  ngOnInit(): void
  {
    this.cargarPersonajes()
  }

  cargarPersonajes()
  {
    this.personajeService.obtenerPersonajes().subscribe({
      next: (data) => {
        this.personajes = data
        this.cdr.detectChanges()
        console.log(data)
      }, error: (err) => {
        this.error = 'Se ha producido un error'
      }
    })
  }

  editar(id: number)
  {
    this.router.navigate(['/editar', id])
  }

  anadir()
  {
    this.router.navigate(['/crearPersonaje'])
  }
}
