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
import { ServicesComponent } from '../services/services.component';
import { ServicesService } from '../services/services.service';
import { UsuarioService } from '../usuario/usuario.service';
import { AutenticacaoService } from '../autenticacao/autenticacao.service';
import { HelperService } from '../helper/helper.service';
import { ListagemMenuService } from '../listagemMenu/listagemMenu.service';
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
    service: ProdutoService;
    service2: ListagemMenuService;
    service3: UsuarioService;
    service4: ServicesService;
    service5: ListaProdutosCarrinhoService
    serviceHelper: HelperService;
    menuLogin: boolean;
    usuarioAutenticado: boolean;
    requisicaoSendoRealizada: boolean;
    router: Router;

    constructor(service: ProdutoService, service2: ListagemMenuService, service3: UsuarioService,service5: ListaProdutosCarrinhoService, router: Router, serviceHelper: HelperService, service4: ServicesService ) {
        this.router = router;
        this.service = service;
        this.service2 = service2;
        this.service3 = service3;
        this.service4 = service4;
        this.service5 = service5;
        this.serviceHelper = serviceHelper;

        
        this.usuarioAutenticado = this.service3.getAutenticado();
        this.usuario = this.service3.getUser();
        this.requisicaoSendoRealizada = false;
        this.serviceHelper.retornaScriptModal();
        this.produtosCarrinhos = this.service5.getProductList();

        this.produtos = this.service.getProductSaleList();
        if(this.produtos.length == 0){
            this.requisicaoSendoRealizada = true;
            this.service4.buscaObjeto("produto")
            .subscribe(lista => {
                lista.forEach(atual => {
                    if(atual.oferta){
                        atual.foto = "https://igroceries-20e9.restdb.io//media/" + atual.foto[0];
                        atual.validade = this.serviceHelper.formataData(new Date(atual.validade));
                        atual.valor = this.serviceHelper.formataValor(atual.valor);
                        this.produtos.push(atual);
                    }
                })
                this.service.setProductSaleList(this.produtos);
                this.requisicaoSendoRealizada = false;
            });
        }

        this.menuLogin = this.service2.getClass();

    }

    verificaAcao(acao:number){
        if(acao == 1){
            this.router.navigateByUrl("/contaUsuario");
        }else if(acao == 2){
            this.logoutClicked();
        }
    }

    logoutClicked(){
        this.service3.setAutenticado(false);
        this.router.navigateByUrl("/menu");
      }
}
