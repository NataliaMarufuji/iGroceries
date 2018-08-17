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
    selector: 'cartao', 
    templateUrl: './cartao.component.html'
})
export class CartaoComponent { 

    @Input() nome: string;
    @Input() numero: number;
    @Input() bandeira: string;
    @Input() cvv: number;
    @Input() validade: Date;
    _id: string;
}