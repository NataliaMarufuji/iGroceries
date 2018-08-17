import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { CartaoComponent } from './cartao.component';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class CartaoService { 

    private _card: CartaoComponent;
    private _cardsList: CartaoComponent[] = [];
    private readonly projectsKey: string = 'projects_key';
    private _autenticado: boolean;

    constructor(http: Http) {}

    public setCard(card: CartaoComponent) {
        this._card = card;
    }

    public getCard(): CartaoComponent {
        return this._card;
    }

    public setCardslist(cardsList: CartaoComponent[]) {
        this._cardsList = cardsList;
    }

    public getCardslist(): CartaoComponent[] {
        return this._cardsList;
    }

}
