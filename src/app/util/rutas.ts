import { ListadoComponent } from '../listado/listado.component';
import { CrearTitularComponent } from '../creartitular/creartitular.component';

export class Rutas {
    
    static RUTAS_APLICACION = [
        {path: '', redirectTo: '/listado', pathMatch: 'full'},
        {path: 'listado', component: ListadoComponent},
        {path: 'crearTitular', component: CrearTitularComponent}
    ];

}