import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { UsuarioComponent } from './usuario.component';
import { EnderecoComponent } from '../endereco/endereco.component';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioService { 

    http: Http;
    headers: Headers;
    url: string = 'v1/fotos';
    options: RequestOptions;
    private _user: UsuarioComponent;
    private readonly projectsKey: string = 'projects_key';
    private _autenticado: boolean;

    constructor(http: Http) {

        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
         const projects: any = localStorage.getItem(this.projectsKey);
        if (projects) {
            this._user = JSON.parse(projects);
        }

        this.options = new RequestOptions({
            headers: new Headers({
                "content-type": "application/json",
                "x-apikey": "5b30d8500c346a20d90a5e31",
                "cache-control": "no-cache"
            })
        });
    }

    public setProjects(projects: any) {
        localStorage.setItem(this.projectsKey, JSON.stringify(projects));
        this._user = projects;
    }

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

    buscaPorId(id: string): Observable<UsuarioComponent> {
        return this.http
            .get("https://igroceries-20e9.restdb.io/rest/usuario/" + id, this.options)
            .map(res => res.json());
    }

}

