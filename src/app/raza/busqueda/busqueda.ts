import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { Raza } from '../../interfaces/raza';
import { Razas } from '../../clases/razas';

@Component({
  selector: 'app-busqueda',
  imports: [InputTextModule,FormsModule,ButtonModule,CommonModule],
  templateUrl: './busquedaRaza.html',
  styleUrl: './busquedaRaza.css',
})

export class BusquedaRaza {

  raza = new Razas()

  razasFiltradas: Raza[] = this.raza.razas
  campoBusquedaRaza: string = '';

  buscarRaza() {
    const t = this.campoBusquedaRaza.toLowerCase();

    this.razasFiltradas = this.raza.razas.filter(a =>
      a.nombre.toLowerCase().includes(t) ||
      a.regionPrincipal.toLowerCase().includes(t) ||
      a.longevidad.toLowerCase().includes(t) ||
      a.descripcion.toLowerCase().includes(t)
    )
  }
}
