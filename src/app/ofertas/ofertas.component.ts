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
import { UsuarioComponent } from '../usuario/usuario.component';
import { ProdutoComponent } from '../produto/produto.component';
import { ProdutoService } from '../produto/produto.service';
import { ServicesService } from '../services/services.service';
import { UsuarioService } from '../usuario/usuario.service';
import { HelperService } from '../helper/helper.service';
import { PainelComponent } from '../painel/painel.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ListaProdutosCarrinhoService } from '../listaProdutosCarrinho/listaProdutosCarrinho.service';
;

@Component({
    moduleId: module.id,
    selector: 'ofertas', 
    templateUrl: './ofertas.component.html',
    styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent { 

    produtos: ProdutoComponent[] = [];
    produtosCarrinhos: ProdutoComponent[] = [];
    usuario: UsuarioComponent;
    produtoService: ProdutoService;
    usuarioService: UsuarioService;
    services: ServicesService;
    listaProdutosCarrinhoService: ListaProdutosCarrinhoService
    serviceHelper: HelperService;
    menuLogin: boolean;
    usuarioAutenticado: boolean;
    requisicaoSendoRealizada: boolean;
    router: Router;

    constructor(service: ProdutoService, service3: UsuarioService,service5: ListaProdutosCarrinhoService, router: Router, serviceHelper: HelperService, service4: ServicesService ) {
        this.router = router;
        this.produtoService = service;
        this.usuarioService = service3;
        this.services = service4;
        this.listaProdutosCarrinhoService = service5;
        this.serviceHelper = serviceHelper;

        
        this.usuarioAutenticado = this.usuarioService.getAutenticado();
        this.usuario = this.usuarioService.getUser();
        this.requisicaoSendoRealizada = false;
        this.serviceHelper.retornaScriptModal();
        this.produtosCarrinhos = this.listaProdutosCarrinhoService.getProductList();

        this.produtos = this.produtoService.getProductSaleList();
        if(this.produtos.length == 0){
            this.requisicaoSendoRealizada = true;
            this.services.buscaObjeto("produto")
            .subscribe(lista => {
                lista.forEach(atual => {
                    if(atual.oferta){
                        atual.foto = "https://igroceries-20e9.restdb.io//media/" + atual.foto[0];
                        atual.validade = this.serviceHelper.formataData(new Date(atual.validade));
                        atual.valor = this.serviceHelper.formataValor(atual.valor);
                        this.produtos.push(atual);
                    }
                })
                this.produtoService.setProductSaleList(this.produtos);
                this.requisicaoSendoRealizada = false;
            });
        }

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
        this.router.navigateByUrl("/menu");
      }
}
