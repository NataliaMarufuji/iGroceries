import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ProdutoComponent } from '../produto/produto.component';
import { ProdutoService } from '../produto/produto.service';
import { UsuarioService } from '../usuario/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ListaProdutosCarrinhoService } from '../listaProdutosCarrinho/listaProdutosCarrinho.service';
import { HelperService } from '../helper/helper.service';

@Component({
    moduleId: module.id,
    selector: 'painel',
    templateUrl: './painel.component.html',
    styleUrls: ['./painel.component.css']
})
export class PainelComponent { 

    service: ProdutoService;
    service2: UsuarioService;
    service3: ListaProdutosCarrinhoService;
    serviceHelper: HelperService;
    productList: ProdutoComponent[];
    usuarioAutenticado: boolean;
    router: Router;
    combos: string[] = [];
    @Input() titulo: string;
    @Input() productId: string;
    @Input() imagemProduto: string;
    elemento: ElementRef;


    constructor(elemento: ElementRef, service: ProdutoService, service2: UsuarioService, service3: ListaProdutosCarrinhoService, router: Router, serviceHelper: HelperService) {

        this.elemento = elemento;
        this.serviceHelper = serviceHelper;
        this.serviceHelper.retornaScriptModal();

        this.router = router;
        this.service = service;

        this.productList = this.service.getProductList();

        this.service2 = service2;
        this.usuarioAutenticado = this.service2.getAutenticado();

        this.service3 = service3;
        this.inicializaCombo();
    }

    fadeOut(cb) {
        $(this.elemento.nativeElement).fadeOut(cb);
    }

    adicionarNoCarrinho(quantidade: string){

        if(quantidade == "Quantidade"){
            this.serviceHelper.retornaScriptToast('Selecione a quantidade do produto');
            return
        }else{
            var produto = this.service.buscaPorId(this.productList, this.productId);
            var quantidadeAux = produto.quantidade;
            var listaDeProdutos = this.service3.getProductList();
    
            produto.quantidade = parseInt(quantidade);
            produto.valorTotal = produto.valor * produto.quantidade;

            if(listaDeProdutos.includes(produto)){
                var index = listaDeProdutos.indexOf(produto);
                produto.quantidade += quantidadeAux;
                listaDeProdutos[index] = produto;
                this.serviceHelper.retornaScriptToast('Item adicionado ao carrinho');
            }else{
                listaDeProdutos.push(produto);
                this.service3.setProductList(listaDeProdutos);
    
                if(!this.usuarioAutenticado){
                    this.router.navigateByUrl("/login");
                 }else{
                    this.serviceHelper.retornaScriptToast('Item adicionado ao carrinho');
                 }
            }
            
        }

        
    }

    inicializaCombo(){
        this.combos.push("Quantidade");
        this.combos.push("1");
        this.combos.push("2");
        this.combos.push("3");
    }
}

