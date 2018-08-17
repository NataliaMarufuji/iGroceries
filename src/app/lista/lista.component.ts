/*
 * livro.component.ts
 * Vers�o: <0.1>
 * No Copyright 
 *
 * Esta classe representa a abstra��o do livro 
   e seus atributos
 */

import { Component, Input } from '@angular/core';
import { ProdutoComponent } from '../produto/produto.component';

@Component({
    moduleId: module.id,
    selector: 'lista', 
    templateUrl: './lista.component.html',
    styleUrls: ['./lista.component.css']
})
export class ListaComponent { 

    nome: string;
    descricao: string;
    produtos: ProdutoComponent[] = [];
    usuario_id: string;
    _id: string;

}