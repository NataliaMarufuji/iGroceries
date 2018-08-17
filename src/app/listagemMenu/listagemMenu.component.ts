/*
 * listagemMenu.component.ts
 * Vers�o: <0.1>
 * No Copyright 
 *
 * Esta classe lista todos os livros cadastrados
   no sistema
 */

import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { ProdutoComponent } from '../produto/produto.component';
import { ProdutoService } from '../produto/produto.service';
import { UsuarioService } from '../usuario/usuario.service';
import { HelperService } from '../helper/helper.service';
import { ServicesService } from '../services/services.service';
import { ListagemMenuService } from '../listagemMenu/listagemMenu.service';
import { PainelComponent } from '../painel/painel.component';
import { ServicesComponent } from '../services/services.component';
import { ActivatedRoute, Router } from '@angular/router';;

@Component({
    moduleId: module.id,
    selector: 'listagemMenu', 
    templateUrl: './listagemMenu.component.html',
    styleUrls: ['./listagemMenu.component.css']
})
export class ListagemMenuComponent { 

    produtos: ProdutoComponent[] = [];
    produtoService: ProdutoService;
    listagemMenuService: ListagemMenuService;
    UsuarioService: UsuarioService;
    services: ServicesService;
    serviceHelper: HelperService;
    mensagem: string = '';
    menuLogin: boolean;
    usuarioAutenticado: boolean;
    requisicaoSendoRealizada: boolean;
    router: Router;

    constructor(service4: ServicesService, service: ProdutoService, service2: ListagemMenuService, service3: UsuarioService, router: Router,serviceHelper: HelperService) {
        this.router = router;
        this.produtoService = service;
        this.serviceHelper = serviceHelper;
        this.services = service4;
        this.requisicaoSendoRealizada = false;

        this.produtos = this.produtoService.getProductList();
        if(this.produtos.length == 0){
            this.requisicaoSendoRealizada = true;
            this.services.buscaObjeto("produto")
            .subscribe(lista => {
                lista.forEach(atual => {
                    atual.foto = "https://igroceries-20e9.restdb.io//media/" + atual.foto[0];
                    atual.validade = this.serviceHelper.formataData(new Date(atual.validade));
                    atual.valor = this.serviceHelper.formataValor(atual.valor);
                })
                this.produtos = lista;
                this.produtoService.setProductList(this.produtos);
                this.requisicaoSendoRealizada = false;
            }); 
        }
          
        this.listagemMenuService = service2;
        this.menuLogin = this.listagemMenuService.getClass();

        this.UsuarioService = service3;
        this.usuarioAutenticado = this.UsuarioService.getAutenticado();
    }

    verificaRoute(livro: ProdutoComponent){
        if(!this.usuarioAutenticado){
            this.mensagem = "Faça o Login para enviar a mensagem";
        }else{
            this.produtoService.setProduct(livro);
            this.router.navigateByUrl("/cadastroMensagem");
        }
    }
}
