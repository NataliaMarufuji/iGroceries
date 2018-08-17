import { NgModule } from '@angular/core';
import { AutenticacaoComponent }  from './autenticacao.component';
import { AutenticacaoService }  from './autenticacao.service';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [ AutenticacaoComponent ],
    exports: [ AutenticacaoComponent ],
    providers: [ AutenticacaoService ]
})
export class AutenticacaoModule { } 
