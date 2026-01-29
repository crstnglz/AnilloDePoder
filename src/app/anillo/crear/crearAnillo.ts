import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { SliderModule } from 'primeng/slider';

@Component({
  selector: 'app-crear',
  imports: [ReactiveFormsModule, SelectModule,InputTextModule,TextareaModule,SelectButtonModule,ButtonModule,SliderModule],
  templateUrl: './crearAnillo.html',
  styleUrl: './crearAnillo.css',
})
export class CrearAnillo {
  razaPortadores = [
    { label: 'Elfo', value: 'Elfo' },
    { label: 'Enano', value: 'Enano'},
    { label: 'Humano', value: 'Humano' },
    { label: 'Maiar', value: 'Maiar' },
    { label: 'Oscuro', value: 'Oscuro' }
  ]

  formulario: FormGroup = new FormGroup({
    nombre: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    portador: new FormControl('', [
      Validators.required,
      Validators.minLength(10)
    ]),
    razaPortador: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    poder: new FormControl('', [
      Validators.required
    ]),
    corrupcion: new FormControl(50, [
      Validators.required,
      Validators.min(0),
      Validators.max(100)
    ])
  })

  enviar(){
    alert
  }

  limpiar(){
    this.formulario.reset()
    this.formulario.get('corrupcion')?.setValue(50)
  }
}
