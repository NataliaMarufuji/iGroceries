import { NgModule } from '@angular/core';
import { OfertasComponent }  from './ofertas.component';
import { OfertasService }  from './ofertas.service';

@NgModule({
    providers: [ OfertasService ]
})
export class OfertasModule { } 