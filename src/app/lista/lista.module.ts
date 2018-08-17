import { NgModule } from '@angular/core';
import { ListaComponent } from './lista.component';
import { ListaService } from './lista.service';

@NgModule({
    declarations: [ ListaComponent],
    exports: [ ListaComponent ],
    providers: [ ListaService ]
})
export class ListaModule { }