import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Titular } from '../model/titular';
import { TitularFisico } from '../model/titularfisico';
import { TitularJuridico } from '../model/titularjuridico';

@Injectable()
export class TitularService {

    listarTitulares() : Observable<any> {
        let fisico : TitularFisico = {cuit: '1234', dni: '12345', nombre: 'a', apellido: 'b', tipo: 'FISICO'};
        let juridico : TitularJuridico = {cuit: '5678', razonSocial: 'rs', anioFundacion: 2005, tipo: 'JURIDICO'};
        let listado : Titular[] = [
            fisico, juridico
        ];
        return of(listado);
    }

}