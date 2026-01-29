import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";
import { ButtonModule } from 'primeng/button';
import { InputText, InputTextModule } from "primeng/inputtext";
import { SelectModule } from 'primeng/select';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SliderModule } from 'primeng/slider';

@Component({
  selector: 'app-crear-personajes',
  imports: [RouterLink, InputTextModule, ReactiveFormsModule, SelectModule, SelectButtonModule, ButtonModule, SliderModule],
  templateUrl: './crear-personajes.html',
  styleUrl: './crear-personajes.css',
})
export class CrearPersonajes {
  razaPersonajes = [
    { label: 'Elfo', value: 'Elfo' },
    { label: 'Enano', value: 'Enano' },
    { label: 'Humano', value: 'Humano' },
    { label: 'Maiar', value: 'Maiar' },
    { label: 'Oscuro', value: 'Oscuro' }
  ]
  formulario: FormGroup = new FormGroup({
    nombre: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    razaPersonajes: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    fechaNacimiento: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    corrupcion: new FormControl(50, [
      Validators.required,
      Validators.min(0),
      Validators.max(100)
    ])
  })

  enviar()
  {
    alert
  }

  limpiar()
  {
    this.formulario.reset()
    this.formulario.get('corrupcion')?.setValue(50)
  }
}
