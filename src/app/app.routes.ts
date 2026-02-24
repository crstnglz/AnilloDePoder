import { Routes } from '@angular/router';
import { Detalle } from './anillo/detalle/detalle';
import { Busqueda } from './anillo/busqueda/busqueda';
import { BusquedaRaza } from './raza/busqueda/busqueda';
import { DetalleRaza } from './raza/detalle/detalleRaza';
import { CrearAnillo } from './anillo/crear/crearAnillo';
import { BuscarPersonaje } from './personajes/buscar-personaje/buscar-personaje';
import { CrearPersonajes } from './personajes/crear-personajes/crear-personajes';
import { Padre } from './modales/padre/padre';
import { DetallePersonajes } from './personajes/detalle-personajes/detalle-personajes';
import { Juego } from './juego/juego';
import { Estadisticas } from './estadisticas/estadisticas';


export const routes: Routes = [
    { path: 'detalle', component: Detalle },
    { path: 'buscar', component: Busqueda },
    { path: 'detalleRaza', component: DetalleRaza },
    { path: 'buscarRaza', component: BusquedaRaza },
    { path: 'crearAnillo', component: CrearAnillo},
    { path: 'detallePersonajes', component: DetallePersonajes},
    { path: 'crearPersonaje', component: CrearPersonajes},
    { path: 'editar/:id', component: CrearPersonajes},
    { path: 'buscarPersonaje', component: BuscarPersonaje},
    { path: 'padre', component: Padre},
    { path: 'juego', component: Juego},
    { path: 'estadisticas', component: Estadisticas}
];
