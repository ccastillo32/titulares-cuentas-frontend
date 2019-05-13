import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { Constantes } from '../util/constantes';
import { Titular } from '../model/titular';
import { TitularFisico } from '../model/titularfisico';
import { TitularJuridico } from '../model/titularjuridico';
import { TitularService } from '../service/titularservice';
import { RespuestaServicio } from '../service/respuestaservicio'; 

@Component({
    template: 'crear-titular',
    templateUrl: './creartitular.component.html',
    styleUrls: ['./creartitular.component.css']
})
export class CrearTitularComponent implements OnInit {

    mensajeError : string;

    titulo: string;
    cuit: string;
    tipo: string;
    dni: string;
    nombre: string;
    apellido: string;
    razonSocial: string;
    anioFundacion: number;

    constructor(private service : TitularService,
                private router : Router,
                private activatedRoute : ActivatedRoute) {

    }

    ngOnInit() {
        this.getParametrosURL();
        this.titulo = 'Crear titular';
        this.tipo = Constantes.FISICO;
        if(this.cuit) {
            this.iniciarDatos();
        }
    }

    getSelectorTipoTitular() : string[] {
        return [ Constantes.FISICO, Constantes.JURIDICO ];
    }

    crearTitular() : void {
        let titular : Titular = this.tipo == Constantes.FISICO ? this.getTitularFisico() 
                                                               : this.getTitularJuridico();
        // TODO: Validar
        console.log('datos');
        console.log(titular);
        this.llamarServicioCreacionTitular(titular);
        
    }

    private llamarServicioCreacionTitular(titular: Titular) : void {
        this.service.crearTitular(titular).subscribe(
            response => {
                let respuesta : RespuestaServicio = response.value ? response.value as RespuestaServicio
                                                                   : response as RespuestaServicio;
                console.log('respuesta servicio');
                console.log(respuesta);
                
                if(respuesta && respuesta.procesoExitoso) {
                    this.irAlListado();
                } else if(respuesta && respuesta.errores) {
                    this.mensajeError = respuesta.getMensaje();
                } else {
                    this.mensajeError = "No se puede crear el titular en este momento. Intente más tarde";
                }

            }
        );
    }

    private getTitularFisico() : TitularFisico {
        let titular : TitularFisico = new TitularFisico();
        titular.cuit = this.cuit;
        titular.tipo = Constantes.FISICO;
        titular.dni = this.dni;
        titular.nombre = this.nombre;
        titular.apellido = this.apellido;
        return titular;
    }

    private getTitularJuridico() : TitularJuridico {
        let titular : TitularJuridico = new TitularJuridico();
        titular.cuit = this.cuit;
        titular.tipo = Constantes.JURIDICO;
        titular.razonSocial = this.razonSocial;
        titular.anioFundacion = this.anioFundacion;
        return titular;
    }

    private irAlListado() : void {
        this.router.navigate(['/listado']);
    }

    private getParametrosURL() : void {
        this.activatedRoute.params.subscribe( params => {
            this.cuit = params['cuit'];
        });
    }

    private 

    private iniciarDatos() : void {
        this.service.buscarTitular(this.cuit).subscribe(
            response => {
                let respuesta : RespuestaServicio = response.value ? response.value as RespuestaServicio
                                                                   : response as RespuestaServicio;
                console.log('respuesta servicio');
                console.log(respuesta);
                
                if(respuesta && respuesta.procesoExitoso) {
                    console.log('iniciar');
                } else if(respuesta && respuesta.errores) {
                    this.mensajeError = respuesta.getMensaje();
                } else {
                    this.mensajeError = "No se puede consultar el titular en este momento. Intente más tarde";
                }

            }
        );
    }

}