import { NgModule } from '@angular/core';
import { EnderecoComponent }  from './endereco.component';
import { EnderecoService }  from './endereco.service';

@NgModule({
    declarations: [ EnderecoComponent ],
    exports: [ EnderecoComponent ],
    providers: [ EnderecoService ]
})
export class EnderecoModule { } 
