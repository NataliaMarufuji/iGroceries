import { NgModule } from '@angular/core';
import { ListagemMenuComponent }  from './listagemMenu.component';
import { ListagemMenuService }  from './listagemMenu.service';

@NgModule({
    providers: [ ListagemMenuService ]
})
export class ListagemMenuModule { } 
