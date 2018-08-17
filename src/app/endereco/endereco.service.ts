import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { EnderecoComponent } from './endereco.component';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class EnderecoService { 

    private _adress: EnderecoComponent;
    private readonly projectsKey: string = 'projects_key';
    private _autenticado: boolean;

    constructor() {}

    public setAdress(adress: EnderecoComponent) {
        this._adress = adress;
    }

    public getAdress(): EnderecoComponent {
        return this._adress;
    }

}

