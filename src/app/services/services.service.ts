import { Http, Headers, Response , RequestOptions} from '@angular/http';
import { ServicesComponent } from './services.component';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ServicesService { 

    http: Http;
    headers: Headers;
    options: RequestOptions;
    private _objeto: ServicesComponent;
    private _listaObjetos: ServicesComponent[] = [];
    private _listaProdutosOfertas: ServicesComponent[] = [];

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

    public setObject(objeto: ServicesComponent) {
        this._objeto = objeto;
    }

    public getObject(): ServicesComponent {
        return this._objeto;
    }

    public setObjectList(listaObjetos: ServicesComponent[]) {
        this._listaObjetos = listaObjetos;
    }

    public getObjectList(): ServicesComponent[] {
        return this._listaObjetos;
    }

    lista(objeto: ServicesComponent) {

        return this.http
        .get(objeto.url)
        .map(res => res.json());
    }

    remove(objeto: ServicesComponent):  Observable<Response> {

        return this.http.delete(objeto.url + '/' + objeto.id);
    }

    atualiza(objeto: ServicesComponent){
        return this.http
        .put("https://igroceries-20e9.restdb.io/rest/" + objeto.url + "/" + objeto.id , JSON.stringify(objeto.objeto), this.options)
        .map(res => res.json());
    }

    cadastra(objeto: ServicesComponent){
        return this.http
        .post("https://igroceries-20e9.restdb.io/rest/" + objeto.url, JSON.stringify(objeto.objeto), this.options)
        .map(res => res.json());   
    }

    buscaObjeto(url: string){

        return this.http
        .get("https://igroceries-20e9.restdb.io/rest/" + url, this.options)
        .map(res => res.json());
    }

    buscaObjetoPorID(url: string, id: string){
        
                return this.http
                .get("https://igroceries-20e9.restdb.io/rest/" + url + "/" + id, this.options)
                .map(res => res.json());
            }

}

export class MensagemCadastro {

    constructor(private _mensagem: string, private _inclusao: boolean) {

        this._mensagem = _mensagem;
        this._inclusao = _inclusao;
    }

    get mensagem(): string {
        return this._mensagem;
    }

    get inclusao(): boolean {

        return this._inclusao;
    }

}
