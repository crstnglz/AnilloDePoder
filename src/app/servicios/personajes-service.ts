import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class PersonajesService {
  constructor(private http: HttpClient){}

  private baseUrl = environment.apiESDL

  obtenerPersonajes(): Observable <any []>
  {
    return this.http.get<any []>(`${this.baseUrl}listaPersonajes`)
  }
}
