/*
 * livro.component.ts
 * Vers�o: <0.1>
 * No Copyright 
 *
 * Esta classe representa a abstra��o do livro 
   e seus atributos
 */

import { Component, Input } from '@angular/core';
import { UsuarioComponent } from '../usuario/usuario.component';
import { ProdutoComponent } from '../produto/produto.component';

@Component({
    moduleId: module.id,
    selector: 'compra', 
    templateUrl: './compra.component.html'
})
export class CompraComponent { 

    @Input() usuario: UsuarioComponent;
    @Input() produtos: ProdutoComponent[];
    @Input() total: number;
    id: string;
}