/*
 * menu.component.ts
 * Vers�o: <0.1>
 * No Copyright 
 *
 * Esta classe � respons�vel pela listagem 
   do menu principal 
 */

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoComponent } from '../produto/produto.component';
import { ProdutoService } from '../produto/produto.service';
import { ListagemMenuService } from '../listagemMenu/listagemMenu.service';
import { UsuarioService } from '../usuario/usuario.service';
import { HelperService } from '../helper/helper.service';
import { UsuarioComponent } from '../usuario/usuario.component';
import {Logger} from "../logger";
import { window } from 'rxjs/operator/window';
import { ListaProdutosCarrinhoService } from '../listaProdutosCarrinho/listaProdutosCarrinho.service';


@Component({
    moduleId: module.id,
    selector: 'menu-inicial', 
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent { 

    produtos: ProdutoComponent[] = [];
    usuario: UsuarioComponent;
    produtoService: ProdutoService;
    listagemMenuService: ListagemMenuService;
    usuarioService: UsuarioService;
    listagemProdutosCarrinhoService: ListaProdutosCarrinhoService;
    helperService: HelperService;
    route: ActivatedRoute;
    router: Router;
    numeroMensagens: number;
    usuarioAutenticado: boolean;

    constructor( service: ProdutoService, service2: ListagemMenuService, service3: UsuarioService, service4: HelperService,service5: ListaProdutosCarrinhoService,  route: ActivatedRoute, router: Router) {

        this.route = route;
        this.router = router;
        this.produtoService = service;
        this.listagemMenuService = service2;
        this.usuarioService = service3;
        this.listagemProdutosCarrinhoService = service5;
        this.helperService = service4;

        this.listagemMenuService.setClass(false);

        this.usuarioAutenticado = this.usuarioService.getAutenticado();
        this.produtos = this.listagemProdutosCarrinhoService.getProductList();
        this.usuario = this.usuarioService.getUser();
    }

    verificaAcao(acao:number){
        if(acao == 1){
            this.router.navigateByUrl("/contaUsuario");
        }else if(acao == 2){
            this.logoutClicked();
        }
    }

    logoutClicked(){
      this.usuarioService.setAutenticado(false);
      location.reload();
    }
}
