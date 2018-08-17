import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'endereco', 
    templateUrl: './endereco.component.html'
})
export class EnderecoComponent { 

    @Input() endereco: string;
    @Input() complemento: string;
    @Input() numero: string;
    @Input() cep: string;
    _id: string;
}