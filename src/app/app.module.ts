import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CasoAlmacenComponent } from './caso-almacen/caso-almacen.component';
import { PrestamoComponent } from './prestamo/prestamo.component';
import { UbiListComponent } from './ubi-list/ubi-list.component';
import { LocationListComponent } from './location-list/location-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CasoAlmacenComponent,
    PrestamoComponent,
    UbiListComponent,
    LocationListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
