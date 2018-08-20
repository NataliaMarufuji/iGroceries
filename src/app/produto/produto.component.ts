/*
 * livro.component.ts
 * Vers�o: <0.1>
 * No Copyright 
 *
 * Esta classe representa a abstra��o do livro 
   e seus atributos
 */

import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'produto', 
    templateUrl: './produto.component.html',
    styleUrls: ['./produto.component.css']
})
export class ProdutoComponent { 

    @Input() nome: string;
    @Input() valor: number;
    @Input() quantidade: number;
    @Input() dataValidade: Date;
    valorTotal: number;
    descricao: string;
    id: string;
}