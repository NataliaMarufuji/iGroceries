import { Http, Headers, Response } from '@angular/http';
import { ListaProdutosCarrinhoComponent } from './listaProdutosCarrinho.component';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ProdutoComponent } from '../produto/produto.component';

@Injectable()
export class ListaProdutosCarrinhoService { 

    private _menuLogin;
    private _productList;
    private _compraFinalizada;

    constructor(){
        this._productList = [];
    }

    public setClass(menuLogin: boolean) {
        this._menuLogin = menuLogin;
    }

    public getClass(): boolean {
        return this._menuLogin;
    }

    public setProductList(productList: ProdutoComponent[]) {
        this._productList = productList;
    }

    public getProductList(): ProdutoComponent[] {
        return this._productList;
    }

    public setCompraFinalizada(compraFinalizada: boolean) {
        this._compraFinalizada = compraFinalizada;
    }

    public getCompraFinalizada(): boolean {
        return this._compraFinalizada;
    }

}

