import { Component, Input } from '@angular/core';
import { EnderecoComponent} from '../endereco/endereco.component'
import { CartaoComponent} from '../cartao/cartao.component'

@Component({
    moduleId: module.id,
    selector: 'usuario', 
    templateUrl: './usuario.component.html',
    styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent { 

    @Input() nome: string;
    @Input() sobrenome: string;
    @Input() cpf: string;
    @Input() dataNascimento: Date;
    @Input() email: string;
    @Input() endereco: EnderecoComponent;
    cartao: CartaoComponent[];
    autenticado: boolean;
    _id: string;

    
}