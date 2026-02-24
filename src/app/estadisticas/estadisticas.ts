import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-estadisticas',
  imports: [RouterLink],
  templateUrl: './estadisticas.html',
  styleUrl: './estadisticas.css',
})
export class Estadisticas implements OnInit {

  jugadas = 0
  victorias = 0
  derrotas = 0

  ngOnInit(): void
  {
    const data = localStorage.getItem('estadisticas')

    if(data)
    {
      const stats = JSON.parse(data)
      this.jugadas = stats.jugadas
      this.victorias = stats.victorias
      this.derrotas = stats.derrotas
    }
  }

  resetearEstadisticas(): void
  {
    localStorage.removeItem('estadisticas')
    this.jugadas = 0
    this.victorias = 0
    this.derrotas = 0
  }
}
