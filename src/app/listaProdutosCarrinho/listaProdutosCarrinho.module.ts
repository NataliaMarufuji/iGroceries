import { NgModule } from '@angular/core';
import { ListaProdutosCarrinhoComponent }  from './listaProdutosCarrinho.component';
import { ListaProdutosCarrinhoService }  from './listaProdutosCarrinho.service';

@NgModule({
    providers: [ ListaProdutosCarrinhoService ]
})
export class ListaProdutosCarrinhoModule { } 
