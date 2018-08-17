import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { UsuarioComponent } from './usuario.component';
import { EnderecoComponent } from '../endereco/endereco.component';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioService { 

    private _user: UsuarioComponent;
    private _autenticado: boolean;

    constructor(http: Http) {}

    public get projects(): any {
        return this._user;
    }

    public setUser(user: UsuarioComponent) {
        this._user = user;
    }

    public getUser(): UsuarioComponent {
        return this._user;
    }

    public setUserAdress(adress: EnderecoComponent) {
        this._user.endereco = adress;
    }

    public getUserAdress(): EnderecoComponent {
        return this._user.endereco;
    }

    public setAutenticado(autenticado: boolean) {
        this._autenticado = autenticado;
    }

    public getAutenticado(): boolean {
        return this._autenticado;
    }

}

