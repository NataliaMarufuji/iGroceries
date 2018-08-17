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
    selector: 'services', 
    templateUrl: './services.component.html'
})
export class ServicesComponent { 

    objeto: Object;
    url: string;
    id: string;
}