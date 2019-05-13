import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TitularService } from '../service/titularservice';
import { Titular } from '../model/titular';
import { RespuestaServicio } from '../service/respuestaservicio';

@Component({
    selector: 'listado',
    templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

    mensajeInfo: string;
    mensajeError: string;
    cargando: boolean;
    listado : Titular[];

    constructor(private service : TitularService,
                private router : Router) {

    }

    ngOnInit() {
        this.listarTitulares();
    }

    listarTitulares() : void {
        this.mostrarCargando(true);
        this.service.listarTitulares().subscribe(
            response => {
                let respuesta : RespuestaServicio = response.value ? response.value as RespuestaServicio
                                                                   : response as RespuestaServicio;
                if(respuesta.procesoExitoso) {
                    this.listado = respuesta.data;
                    this.mostrarMensajeInfo( 'Total titulares: ' + this.listado.length );
                } else {
                    this.mostrarMensajeError( 'Ocurrió un error buscando el listado de titulares. Intente más tarde.' );
                }
            }
        );
    }

    irACrearTitular() : void {
        this.router.navigate(['/crearTitular']);
    }

    /**
     * Muestra un mensa de éxito en pantalla
     * @param mensaje 
     */
    private mostrarMensajeInfo(mensaje: string) {
        this.cargando = false;
        this.mensajeError = null;
        this.mensajeInfo = mensaje;
    }

    /**
     * Muestra un mensaje de error en pantalla.
     * @param mensaje 
     */
    private mostrarMensajeError(mensaje : string) {
        this.mensajeInfo = null;
        this.mensajeError = mensaje;
        this.cargando = false;
    }

    /**
     * Muestra/Oculta el mensaje 'Cargando datos...'
     * @param flag 
     */
    private mostrarCargando(flag : boolean) {
        if(flag) {
            this.mensajeInfo = "Cargando datos ...";
            this.cargando = true;
        } else {
            this.mensajeInfo = null;
            this.cargando = false;
        }
    }

}