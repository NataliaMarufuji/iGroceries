/*
 * contaUsuario.ts
 * Vers�o: <0.1>
 * No Copyright 
 *
 * Esta classe representa a abstra��o da conta
   de um usu�rio com seus atributos
 */

import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import { UsuarioComponent } from '../usuario/usuario.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';
import { EnderecoComponent } from '../endereco/endereco.component';
import { ProdutoComponent } from '../produto/produto.component';
import { ProdutoService } from '../produto/produto.service';
import { HelperService } from '../helper/helper.service';
import { CompraService } from '../compra/compra.service';
import { ServicesService } from '../services/services.service';
import { CompraComponent } from '../compra/compra.component';

@Component({
    moduleId: module.id,
    selector: 'contaUsuario',
    templateUrl: './contaUsuario.component.html',
    styleUrls: ['./contaUsuario.component.css']
})
export class ContaUsuarioComponent { 

    usuario: UsuarioComponent = new UsuarioComponent();
    endereco: EnderecoComponent = new EnderecoComponent();
    service: UsuarioService;
    service2: HelperService;
    service3: CompraService;
    service4: ServicesService;
    route: ActivatedRoute;
    router: Router;
    produtos: ProdutoComponent[] = [];
    serviceLi: ProdutoService;
    ServiceUs: UsuarioService;
    usuarioAutenticado: boolean;
    listaCompras: CompraComponent[] = [];
    listaComprasUsuario: CompraComponent[] = [];

    constructor(service: UsuarioService, service2: HelperService, service3: CompraService, service4: ServicesService, route: ActivatedRoute, router: Router) {

       this.route = route;
       this.router = router;
       this.service = service;
       this.service4 = service4;
       this.usuarioAutenticado = this.service.getAutenticado(); 
       this.usuario = this.service.getUser();
       this.endereco = this.usuario.endereco[0];

       this.service2 = service2;
       this.service2.retornaScripCollapse();
       this.service2.retornaScriptModal();

       this.service3 = service3;
        this.service4.buscaObjeto("compra")
        .subscribe(lista => {
            this.listaCompras = lista;
            this.service3.setShoppingList(this.listaCompras); 
            this.buscaComprasUsuario(); 
        });
        
    }

    buscaComprasUsuario(){
        this.listaCompras.forEach(compraAtual =>{
            if(compraAtual.usuario[0]._id == this.usuario._id){
                if(compraAtual.usuario[0].cartao != undefined) {
                    compraAtual.usuario[0].cartao[0].validade = this.service2.formataDataCartao(new Date(compraAtual.usuario[0].cartao[0].validade));
                }
                this.listaComprasUsuario.push(compraAtual);
            }
        })
        this.service3.setUserShoppingList(this.listaComprasUsuario);
    }

    verificaAcao(acao:number){
        if(acao == 1){
            this.router.navigateByUrl("/contaUsuario");
        }else if(acao == 2){
            this.logoutClicked();
        }
    }

    logoutClicked(){
        this.service.setAutenticado(false);
        this.router.navigateByUrl('/menu');
    }

}