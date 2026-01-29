import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";
import { ButtonModule } from 'primeng/button';
import { InputText, InputTextModule } from "primeng/inputtext";
import { SelectModule } from 'primeng/select';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SliderModule } from 'primeng/slider';
import { PersonajesService } from '../../servicios/personajes-service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crear-personajes',
  imports: [RouterLink, InputTextModule, ReactiveFormsModule, SelectModule, SelectButtonModule, ButtonModule, SliderModule],
  templateUrl: './crear-personajes.html',
  styleUrl: './crear-personajes.css',
})
export class CrearPersonajes implements OnInit {
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

  modify = false
  id?: number

  constructor(
    private personajeService: PersonajesService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void
  {
    const idParam = this.route.snapshot.paramMap.get('id')
    if(idParam)
    {
      this.id = Number(idParam)
    }
  }

  enviar()
  {
    if(this.formulario.invalid) return

    if(this.modify && this.id)
    {
      this.personajeService.modificarPersonaje(this.id, this.formulario.value).subscribe(() => this.router.navigate(['/']))
    }
    else
    {
      this.personajeService.crearPersonaje(this.formulario.value).subscribe(() => this.router.navigate(['/']))
    }
  }

  limpiar()
  {
    this.formulario.reset()
    this.formulario.get('corrupcion')?.setValue(50)
  }
}
