import { NgModule } from '@angular/core';
import { CompraComponent }  from './compra.component';
import { CompraService }  from './compra.service';

@NgModule({
    declarations: [ CompraComponent ],
    exports: [ CompraComponent ],
    providers: [ CompraService ]
})
export class CompraModule { } 
