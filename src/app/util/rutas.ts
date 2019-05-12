import { ListadoComponent } from '../listado/listado.component';

export class Rutas {
    
    static RUTAS_APLICACION = [
        {path: '', redirectTo: '/listado', pathMatch: 'full'},
        {path: 'listado', component: ListadoComponent}
    ];

}