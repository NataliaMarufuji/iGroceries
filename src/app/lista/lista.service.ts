import { Http, Headers, Response } from '@angular/http';
import { ListaComponent } from './lista.component';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ListaService { 

    private _lista: ListaComponent;
    private _listaDasListas: ListaComponent[] = [];

    constructor() {}

    public setLista(lista: ListaComponent) {
        this._lista = lista;
    }

    public getLista(): ListaComponent {
        return this._lista;
    }

    public setList_List(listaListas: ListaComponent[]) {
        this._listaDasListas = listaListas;
    }

    public getList_List(): ListaComponent[] {
        return this._listaDasListas;
    }
}
