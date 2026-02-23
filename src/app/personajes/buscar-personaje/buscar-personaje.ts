import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonajesService } from '../../servicios/personajes-service';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfiguracionPopup } from '../../interfaces/configuracion-popup';
import { MessageService } from 'primeng/api';
import { ConfirmarPopup } from '../../modales/confirmar-popup/confirmar-popup';
import { ConfirmPopup } from 'primeng/confirmpopup';


@Component({
  selector: 'app-buscar-personaje',
  imports: [ButtonModule, FormsModule, CommonModule, ConfirmarPopup],
   standalone: true,
  providers: [MessageService],
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

  bajaFisica(id: number): ConfiguracionPopup
  {
    return {
      message: 'Se va a borrar de forma definitiva el registro ¿Estás seguro que deseas borrarlo?',
      header: 'Borrado definitivo',
      nameButton: 'Baja Física',
      severity: 'danger',
      acceptLabel: 'Eliminar',
      rejectLabel: 'Cancelar',
      funcion: (MessageService: any) => {
        this.personajeService.bajaFisica(id).subscribe({
          next: () => {
            this.cargarPersonajes()
          },
          error: () => {
            MessageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'No se puede borrar el personaje porque es portador',
              life: 3000
            });
          }
        });
      }
    };
  }

  bajaLogica(id: number): ConfiguracionPopup
  {
    return {
      message: 'Se va a dar de baja el personaje ¿Estás seguro?',
      header: 'Baja lógica',
      nameButton: 'Baja Lógica',
      severity: 'danger',
      acceptLabel: 'Dar de baja',
      rejectLabel: 'Cancelar',
      funcion: () => {
        this.personajeService.bajaLogica(id).subscribe(() => {
          this.cargarPersonajes()
        })
      }
    }
  }

  reactivar(id: number): ConfiguracionPopup
  {
    return {
      message: '¿Deseas reactivar el personaje?',
      header: 'Reactivar',
      nameButton: 'Reactivar',
      severity: 'success',
      acceptLabel: 'Reactivar',
      rejectLabel: 'Cancelar',
      funcion: () => {
        this.personajeService.reactivar(id).subscribe(() => {
          this.cargarPersonajes()
        })
      }
    }
  }

}
