export interface PartidaDTO {
  id: number;
  fechaInicio: string;
  fechaFin: string | null;
  numeroCorrectas: number;
  finPartida: boolean;
}


export interface Pregunta
{
  id: number;
  pregunta: string;
  respuesta1: string;
  respuesta2: string;
  respuesta3: string;
  respuesta4: string;
}

export interface PartidaLocal
{
  id: number;
  numeroCorrectas: number;
  finParitida: boolean;
  preguntasRespondidas: number[];
}
