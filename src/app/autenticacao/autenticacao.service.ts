import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { AutenticacaoComponent } from './autenticacao.component';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

@Injectable()
export class AutenticacaoService { 

    private _autenticado: boolean;

    constructor() {}

    public setAutenticado(autenticado: boolean) {
        this._autenticado = autenticado;
    }

    public getAutenticado(): boolean {
        return this._autenticado;
    }

    verificaSenhasIguais(senha: string, confirmaSenha: string){
        return senha == confirmaSenha;
    }
}

