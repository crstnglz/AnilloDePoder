import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Juego {
  constructor(private http: HttpClient){}

  private baseUrl = environment.apiESDL

  empezarPartida(): Observable <any[]>
  {
    return this.http.post<any>(`${this.baseUrl}empezarPartida/`, {})
  }

  obtenerPregunta(id: number): Observable<any>
  {
    return this.http.get<any>(`${this.baseUrl}obtenerPregunta/${id}`)
  }

  validarRespuesta(idPregunta: number, respuestaUser: number): Observable<boolean>
  {
    return this.http.get<boolean>(`${this.baseUrl}respuesta/${idPregunta}/?respuestaUsuario=${respuestaUser}`)
  }

  marcarCorrecta(idPartida: number): Observable<any>
  {
    return this.http.put<any>(`${this.baseUrl}correcta/${idPartida}/`, {})
  }

  finalizarPartida(idPartida: number): Observable<any>
  {
    return this.http.put<any>(`${this.baseUrl}finalizar/${idPartida}/`, {})
  }
}
