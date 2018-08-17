import { NgModule } from '@angular/core';
import { ProdutoComponent } from './produto.component';
import { FiltroPorTitulo } from './produto.pipes';
import { ProdutoService } from './produto.service';

@NgModule({
    declarations: [ ProdutoComponent, FiltroPorTitulo],
    exports: [ ProdutoComponent, FiltroPorTitulo ],
    providers: [ ProdutoService ]
})
export class ProdutoModule { }