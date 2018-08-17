import { Http, Headers, Response } from '@angular/http';
import { OfertasComponent } from './ofertas.component';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class OfertasService { 

    private _menuLogin;

    constructor() {
    }

    public setClass(menuLogin: boolean) {
        this._menuLogin = menuLogin;
    }

    public getClass(): boolean {
        return this._menuLogin;
    }

}
