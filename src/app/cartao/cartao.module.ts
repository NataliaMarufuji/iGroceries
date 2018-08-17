import { NgModule } from '@angular/core';
import { CartaoComponent }  from './cartao.component';
import { CartaoService }  from './cartao.service';

@NgModule({
    declarations: [ CartaoComponent ],
    exports: [ CartaoComponent ],
    providers: [ CartaoService ]
})
export class CartaoModule { } 
