import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { CompraComponent } from './compra.component';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class CompraService { 

    private _total: number;
    private _listaCompras: CompraComponent[] = [];
    private _listaComprasUsuario: CompraComponent[] = [];
    private _autenticado: boolean;

    constructor(http: Http) {
    }

    public setUserShoppingList(listaComprasUsuario: CompraComponent[]) {
        this._listaComprasUsuario = listaComprasUsuario;
    }

    public getUserShoppingList(): CompraComponent[] {
        return this._listaComprasUsuario;
    }

    public setShoppingList(listaCompras: CompraComponent[]) {
        this._listaCompras = listaCompras;
    }

    public getShoppingList(): CompraComponent[] {
        return this._listaCompras;
    }

    public setTotal(total: number) {
        this._total = total;
    }

    public getTotal(): number {
        return this._total;
    }

}

