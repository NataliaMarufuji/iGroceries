/*
 * login.component.ts
 * Versão: <0.1>
 * No Copyright 
 *
 * Esta classe abtrai o login e a verificação e autenticação
   da conta logada no sistema
 */

import { Component } from '@angular/core';
import { UsuarioComponent } from '../usuario/usuario.component';
import { AutenticacaoComponent } from '../autenticacao/autenticacao.component';
import { ListagemMenuComponent } from '../listagemMenu/listagemMenu.component';
import { FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';;
import { UsuarioService } from '../usuario/usuario.service';
import { ListagemMenuService } from '../listagemMenu/listagemMenu.service';
import { ServicesService } from '../services/services.service';
import { Logger } from "../logger";

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent { 

    user: UsuarioComponent = new UsuarioComponent();
    autenticacao: AutenticacaoComponent = new AutenticacaoComponent();
    usuarioService: UsuarioService;
    services: ServicesService;
    listaAutenticacao: AutenticacaoComponent[];
    route: ActivatedRoute;
    router: Router;
    erroAutenticacao:boolean;
    requisicaoSendoRealizada: boolean;


    constructor(services: ServicesService, service: UsuarioService, route: ActivatedRoute, router: Router, service2: ServicesService ){
        this.route = route;
        this.router = router;
        this.erroAutenticacao = false;
        this.requisicaoSendoRealizada = false;
        
        this.usuarioService = service;
        this.services = services;
        this.services.buscaObjeto("autenticacao")
                        .subscribe(lista => this.listaAutenticacao = lista);

        Logger.info('Menu carregado');
    }

    realizarAutenticacao(){
        Logger.debug('Iniciando autenticação')
        var contador = 1;
        this.requisicaoSendoRealizada = true;
        this.listaAutenticacao.forEach(atual => {
            this.services.buscaObjetoPorID("usuario", atual.usuario.toString())
                        .subscribe(usuario => {
                            if(usuario.email == this.autenticacao.email
                                && atual.senha == this.autenticacao.senha){
                                    this.usuarioService.setAutenticado(true);
                                    this.usuarioService.setUser(usuario);
                                    this.erroAutenticacao = false;
                                    this.requisicaoSendoRealizada = false;
                                    this.router.navigateByUrl('/menu');
                            }else{
                                if(contador == this.listaAutenticacao.length && !this.usuarioService.getAutenticado()){
                                    this.usuarioService.setAutenticado(false);
                                    this.erroAutenticacao = true;
                                    this.requisicaoSendoRealizada = false;
                                }
                            }
                            contador++;
                        })
        })
    }

    reset() {
        this.autenticacao.email = '';
        this.autenticacao.senha = '';
    }

    resetMessage(){
        this.erroAutenticacao = false;
        this.reset();
    }
    

}