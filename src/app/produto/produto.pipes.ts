import { Pipe, PipeTransform } from '@angular/core';
import { ProdutoComponent } from './produto.component';
 
@Pipe({
    name: 'filtroPorTitulo'
})
export class FiltroPorTitulo implements PipeTransform { 

    transform(produto: ProdutoComponent[], digitado: string): ProdutoComponent[] {

        digitado = digitado.toLowerCase();
        return produto.filter( produto => produto.nome.toLowerCase().includes(digitado));
    }
}