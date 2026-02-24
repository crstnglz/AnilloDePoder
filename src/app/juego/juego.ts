import { Component, OnInit } from '@angular/core';
import { JuegoService } from '../servicios/juego-service';
import { Partida, PartidaDTO, Pregunta } from '../interfaces/partida';

@Component({
  selector: 'app-juego',
  imports: [],
  templateUrl: './juego.html',
  styleUrl: './juego.css',
})
export class Juego implements OnInit {
  partidaActual: Partida | null = null
  preguntaActual: Pregunta | null = null

  readonly TOTAL_PREGUNTAS = 30
  preguntasDisponibles: number[] = []

  constructor(private juegoService: JuegoService){}

  ngOnInit(): void {
    const data = localStorage.getItem('partida')
    if(data)
    {
      this.partidaActual = JSON.parse(data)

      if(this.partidaActual && !this.partidaActual.acabada)
      {
        this.inicializarPreguntasDisponibles()
        this.cargarPregunta()
      }
    }
  }

  iniciarNuevaPartida(): void
  {
    this.juegoService.empezarPartida().subscribe((dto: PartidaDTO) => {
      this.partidaActual = {
        id: dto.id,
        preguntas: [],
        numeroCorrectas: 0,
        acabada: false,
        perdida: false
      }

      this.inicializarPreguntasDisponibles()
      this.guardarLocal()
      this.cargarPregunta()
    })
  }

  inicializarPreguntasDisponibles(): void
  {
    this.preguntasDisponibles = Array.from({ length: this.TOTAL_PREGUNTAS}, (_, i) => i + 1)
  }

  obtenerPreguntaAleatoria(): number | null
  {
    if(this.preguntasDisponibles.length === 0) return null

    const indice = Math.floor(Math.random() * this.preguntasDisponibles.length)
    const id = this.preguntasDisponibles[indice]

    this.preguntasDisponibles.splice(indice, 1)

    return id
  }

  cargarPregunta(): void
  {
    const id = this.obtenerPreguntaAleatoria()
    if(!id) return

    this.juegoService.obtenerPregunta(id).subscribe((pregunta) => {
      this.preguntaActual = pregunta
      this.partidaActual?.preguntas.push({ id: pregunta.id, respuesta: null })
      this.guardarLocal()
    })
  }

  responder(opcion: number): void
  {
    if(!this.partidaActual || !this.preguntaActual) return

    this.juegoService
      .validarRespuesta(this.partidaActual!.id, opcion)
      .subscribe((esCorrecta) => {
        const preguntaPendiente = this.partidaActual!.preguntas.find(p => p.respuesta === null)

        if(!preguntaPendiente) return

        preguntaPendiente.respuesta = opcion

        if(esCorrecta)
        {
          this.juegoService
            .marcarCorrecta(this.partidaActual!.id)
            .subscribe((dto: PartidaDTO) => {
              this.partidaActual!.numeroCorrectas = dto.numeroCorrectas

              if(dto.numeroCorrectas === 5)
              {
                this.finalizar(false)
              }
              else
              {
                this.cargarPregunta()
              }

              this.guardarLocal()
            })
        }
        else
        {
          this.finalizar(true)
        }
      })
  }

  finalizar(perdida: boolean): void
  {
    if(!this.partidaActual) return

    this.partidaActual.acabada = true
    this.partidaActual.perdida = perdida

    this.juegoService.finalizarPartida(this.partidaActual.id).subscribe(() => {
      this.guardarLocal()
    })
  }

  guardarLocal(): void
  {
    localStorage.setItem('partida', JSON.stringify(this.partidaActual))
  }

  resetear(): void
  {
    localStorage.removeItem('partida')
    this.partidaActual = null
    this.partidaActual = null
  }
}
