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
import { ProdutoComponent } from '../produto/produto.component';
import { ProdutoService } from '../produto/produto.service';
import { ListagemUsuarioComponent } from '../listagemUsuario/listagemUsuario.component';
import { ListaProdutosCarrinhoService } from '../listaProdutosCarrinho/listaProdutosCarrinho.service';
import { CompraService } from '../compra/compra.service';

@Component({
    moduleId: module.id,
    selector: 'listaProdutosCarrinho',
    templateUrl: './listaProdutosCarrinho.component.html',
    styleUrls: ['./listaProdutosCarrinho.component.css']
})
export class ListaProdutosCarrinhoComponent { 

    service: UsuarioService;
    produtos: ProdutoComponent[] = [];
    service2: ListaProdutosCarrinhoService;
    service3: CompraService;
    total: number;

    constructor(service: ProdutoService, service2: ListaProdutosCarrinhoService, service3: CompraService, userService: UsuarioService) {

       this.service2 = service2;
       this.produtos = this.service2.getProductList();
       this.service3 = service3;
       this.verificaTotal();
       this.service = userService;  
    }

    verificaTotal(){
        this.total = 0.0;
        this.produtos.forEach(atual => {
            this.total += atual.valorTotal;
        })
        this.service3.setTotal(this.total);
    }

    removerProduto(produto: ProdutoComponent){
        var indexToRemove = this.produtos.indexOf(produto);
        if (indexToRemove !== -1) {
            this.produtos.splice(indexToRemove, 1);
            this.service2.setProductList(this.produtos);
            console.log(this.produtos);
            this.verificaTotal();
        }  
    }

    logoutClicked(event){
        this.service.setAutenticado(false);
    }
}