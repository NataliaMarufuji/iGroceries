import { Http, Headers, Response , RequestOptions} from '@angular/http';
import { ProdutoComponent } from './produto.component';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ProdutoService { 

    http: Http;
    headers: Headers;
    options: RequestOptions;
    private _produto: ProdutoComponent;
    private _listaProdutos: ProdutoComponent[] = [];
    private _listaProdutosOfertas: ProdutoComponent[] = [];

    constructor(http: Http) {
        
        this.http = http;

        this.options = new RequestOptions({
            headers: new Headers({
                "content-type": "application/json",
                "x-apikey": "5b30d8500c346a20d90a5e31",
                "cache-control": "no-cache"
            })
        });
    }

    public setProduct(produto: ProdutoComponent) {
        this._produto = produto;
    }

    public getProduct(): ProdutoComponent {
        return this._produto;
    }

    public setProductList(listaProdutos: ProdutoComponent[]) {
        this._listaProdutos = listaProdutos;
    }

    public getProductList(): ProdutoComponent[] {
        return this._listaProdutos;
    }

    public setProductSaleList(listaProdutosOfertas: ProdutoComponent[]) {
        this._listaProdutosOfertas = listaProdutosOfertas;
    }

    public getProductSaleList(): ProdutoComponent[] {
        return this._listaProdutosOfertas;
    }

    buscaPorId(lista: ProdutoComponent[], id: string): ProdutoComponent {
        var produto = new ProdutoComponent();
        lista.forEach(atual => {
             if(atual.id == id){
                 produto = atual;
             }
         })
         return produto;
     }

     buscaImagemProduto(idImagem: string){
        return this.http
        .get("https://rdb-simpledb.restdb.io/media/" + idImagem, this.options)
     }

}

