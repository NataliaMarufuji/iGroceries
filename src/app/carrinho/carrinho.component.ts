/*
 * contaUsuario.ts
 * Vers�o: <0.1>
 * No Copyright 
 *
 * Esta classe representa a abstra��o da conta
   de um usu�rio com seus atributos
 */

import { Component } from '@angular/core';
import { UsuarioComponent } from '../usuario/usuario.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';
import { ListaProdutosCarrinhoService } from '../listaProdutosCarrinho/listaProdutosCarrinho.service';
import { EnderecoComponent } from '../endereco/endereco.component';
import { ServicesComponent } from '../services/services.component';
import { ProdutoComponent } from '../produto/produto.component';
import { CartaoComponent } from '../cartao/cartao.component';
import { CompraService } from '../compra/compra.service';
import { ServicesService } from '../services/services.service';
import { CompraComponent } from '../compra/compra.component';
import { HelperService } from '../helper/helper.service';

@Component({
    moduleId: module.id,
    selector: 'carrinho',
    templateUrl: './carrinho.component.html',
    styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent { 

    usuario: UsuarioComponent = new UsuarioComponent();
    endereco: EnderecoComponent = new EnderecoComponent();
    cartao: CartaoComponent = new CartaoComponent();
    cartaoSelecionado: CartaoComponent;
    compra: CompraComponent = new CompraComponent();
    usuarioService: UsuarioService;
    listaProdutosCarrinhoService: ListaProdutosCarrinhoService;
    compraService: CompraService;
    services: ServicesService;
    helperService: HelperService;
    produtos: ProdutoComponent[] = [];
    cartoes: CartaoComponent[] = [];
    route: ActivatedRoute;
    router: Router;
    compraFinalizada: Boolean;
    usuarioAutenticado: boolean;
    bandeiras: string[] = [];
    requisicaoSendoRealizada: boolean;
    cartaoJaSelecionado: boolean;
    totalCarrinho: number;
    objetoParaService = new ServicesComponent();

    constructor(helperService: HelperService, service: UsuarioService,  service3: ListaProdutosCarrinhoService, service4: CompraService, service5: ServicesService, route: ActivatedRoute, router: Router) {
        this.route = route;
        this.router = router;
        this.usuarioService = service;
        this.listaProdutosCarrinhoService = service3;
        this.compraService = service4;
        this.services = service5;
        this.helperService = helperService;


       this.helperService.retornaScriptModal();
       this.helperService.retornaScriptMascaras();

        this.compraFinalizada = false;   
        this.requisicaoSendoRealizada = false;
        this.cartaoJaSelecionado = false;
        this.iniciaBandeiras();
        this.usuarioAutenticado = this.usuarioService.getAutenticado(); 

        this.usuario = this.usuarioService.getUser();
        this.endereco = this.usuario.endereco[0];
        this.produtos = this.listaProdutosCarrinhoService.getProductList();
        this.totalCarrinho = this.compraService.getTotal();
        this.listaProdutosCarrinhoService.setCompraFinalizada(false);
        this.cartoes = this.usuario.cartao == undefined ?  this.cartoes : this.usuario.cartao;
    }

    finalizaCompra(){
        if(this.produtos.length == 0){
            this.helperService.retornaScriptToast('Adicione pelo menos 1 item em seu carrinho para fechar a lista');
        }else{
            this.listaProdutosCarrinhoService.setCompraFinalizada(true);
            this.compraFinalizada = true;
            this.helperService.retornaScriptModal();
        }
    }

    cancelarCompra(){
        this.listaProdutosCarrinhoService.setCompraFinalizada(false);
        this.compraFinalizada = false;
    }

    cadastrarCartao(){
        this.objetoParaService.url = "cartao";
        this.objetoParaService.objeto = this.cartao;

        var validade = "01/".concat(this.cartao.validade.toString());
        this.cartao.validade = new Date(validade);
        this.services.cadastra(this.objetoParaService)
                     .subscribe(resp => {
                         this.cartaoSelecionado = this.cartao;
                         this.cartaoJaSelecionado = true;
                         this.cartoes.push(resp._id);
                         this.usuario.cartao = this.cartoes;
                         this.objetoParaService.url = "usuario";
                         this.objetoParaService.objeto = this.usuario;
                         this.objetoParaService.id = this.usuario._id;
                         this.services.atualiza(this.objetoParaService)
                                     .subscribe(resp => {
                                        this.compra.usuario = resp._id;
                                        this.compra.produtos = this.produtos;
                                        this.compra.total = this.totalCarrinho;
                                    });
                     })
    }

    cadastraCompra(){
        this.compra.usuario =  this.usuario;
        this.compra.produtos = this.produtos;
        this.compra.total = this.compraService.getTotal();;
        this.requisicaoSendoRealizada = true;
        this.objetoParaService.url = "compra";
        this.objetoParaService.objeto = this.compra;
        this.services.cadastra(this.objetoParaService)
                        .subscribe(resp => {
                        this.requisicaoSendoRealizada = false;
                        var products = [];
                        this.listaProdutosCarrinhoService.setProductList(products);
                        this.helperService.retornaScriptDeModal("modal1");
                        });
    }

    iniciaBandeiras(){
        this.bandeiras.push("Bandeira do cartão");
        this.bandeiras.push("Visa");
        this.bandeiras.push("Mastercard");
        this.bandeiras.push("Elo");
    }

    verificaOpcaoCartao(event){
        this.cartaoSelecionado = event;
        if(event == "Adicionar cartão"){
            this.cartao = new CartaoComponent();
            this.helperService.retornaScriptDeModal("modal2");
        }else{
            this.cartao = this.cartaoSelecionado;
            this.cartaoJaSelecionado = true;
        }
        console.log(this.cartaoSelecionado);
    }

    mostrarGridCartoes(){
        this.cartaoJaSelecionado = false;
        this.helperService.retornaScriptModal();
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