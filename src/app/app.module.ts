import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ListadoComponent } from './listado/listado.component';
import { CrearTitularComponent } from './creartitular/creartitular.component';
import { Rutas } from './util/rutas';
import { TitularService } from './service/titularservice';

@NgModule({
  declarations: [
    AppComponent, CrearTitularComponent, ListadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot( Rutas.RUTAS_APLICACION )
  ],
  providers: [ TitularService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
