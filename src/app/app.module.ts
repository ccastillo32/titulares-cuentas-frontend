import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { ListadoComponent } from './listado/listado.component';
import { Rutas } from './util/rutas';
import { TitularService } from './service/titularservice';

@NgModule({
  declarations: [
    AppComponent, ListadoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( Rutas.RUTAS_APLICACION )
  ],
  providers: [ TitularService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
