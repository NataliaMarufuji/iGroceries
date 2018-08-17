/*
 * listagem.component.ts
 * Versão: <0.1>
 * No Copyright 
 *
 * Esta classe lista todos os livros de um
   determinado usuário 
 */

import { Component } from '@angular/core';
import { ListaService } from '../lista/lista.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ListaComponent } from '../lista/lista.component';
import { PainelListasComponent } from '../painelListas/painelListas.component';
import { UsuarioService } from '../usuario/usuario.service';
import { UsuarioComponent } from '../usuario/usuario.component';
import { AutenticacaoService } from '../autenticacao/autenticacao.service';
import { ProdutoComponent } from '../produto/produto.component';
import {Logger} from "../logger";

@Component({
    moduleId: module.id,
    selector: 'listagemLista',
    templateUrl: './listagemLista.component.html',
    styleUrls: ['./listagemLista.component.css']
})
export class ListagemListasComponent {

    listas: ListaComponent[] = [];
    service: ListaService;
    service2: UsuarioService;
    service3: AutenticacaoService;
    mensagem: string = '';
    produtos: ProdutoComponent[] = [];
    route: ActivatedRoute;
    router: Router;
    usuarioAutenticado: boolean;

    constructor(service: ListaService, service2: UsuarioService, service3: AutenticacaoService, route: ActivatedRoute, router: Router) {

        this.route = route;
        this.router = router;
        this.service2 = service2;
        this.service = service;
        this.service3 = service3;
        /*this.service
        .lista()
        .subscribe(lista => {
            var listagem = [] as ListaComponent[];
            lista.forEach(atual => {
                if(atual.url != "" && atual.nome == undefined && atual.usuario == undefined){
                    listagem.push(atual);
                }
            });
            this.listas = listagem;
        });*/
        this.usuarioAutenticado = this.service2.getAutenticado();
        this.controiListaTest();
       console.log(this.listas);
    }

    remove(message: ListaComponent, painel: PainelListasComponent) {
        
        this.service
            .remove(message)
            .subscribe(
                () => {

                    painel.fadeOut(() => {

                        let novasMensagens = this.listas.slice(0);
                        let indice = novasMensagens.indexOf(message);
                        novasMensagens.splice(indice, 1);
                        this.listas = novasMensagens;
                        this.mensagem = 'Mensagem removida com sucesso';
                    }); 
                }, 
                erro => {
                    Logger.error(erro);
                    this.mensagem = 'Não foi possível remover a mensagem';
                }
            );
    }

    logoutClicked(){
        this.service2.setAutenticado(false);
        this.router.navigateByUrl("/menu");
      }

    constroiListaProdutosTest(){ // apenas para teste
        var produto1 = new ProdutoComponent();
        var produto2 = new ProdutoComponent();
        var produto3 = new ProdutoComponent();
        var produto4 = new ProdutoComponent();
        var produto5 = new ProdutoComponent();

        produto1.nome = "Manjericão";
        produto1.valor = 3.50;
        produto1.dataValidade = this.retornaDataFormatada(new Date());
        produto1.quantidade = 4;
        produto1.descricao = "teste";

        produto2.nome = "Tomate cereja";
        produto2.valor = 5.30;
        produto2.dataValidade = this.retornaDataFormatada(new Date());
        produto2.quantidade = 2;
        produto2.descricao = "teste";

        produto3.nome = "Aipim";
        produto3.valor = 2.40;
        produto3.dataValidade = this.retornaDataFormatada(new Date());
        produto3.quantidade = 1;
        produto3.descricao = "teste";

        produto4.nome = "Queijo mussarela";
        produto4.valor = 14.00;
        produto4.dataValidade = this.retornaDataFormatada(new Date());
        produto4.quantidade = 1;
        produto4.descricao = "teste";

        produto5.nome = "Salame italiano";
        produto5.valor = 21.50;
        produto5.dataValidade = this.retornaDataFormatada(new Date());
        produto5.quantidade = 1;
        produto5.descricao = "teste";
    
        
        this.produtos.push(produto1);
        this.produtos.push(produto2);
        this.produtos.push(produto3);
        this.produtos.push(produto4);
        this.produtos.push(produto5);
        
    }

    retornaDataFormatada(data:Date){
        var dia = data.getDay();
        var mes = data.getMonth();
        var ano = data.getFullYear();

        return dia + "/" + mes + "/" + ano;
    }

    controiListaTest(){
        this.constroiListaProdutosTest();
        var lista1 = new ListaComponent();
        var lista2 = new ListaComponent();
        var lista3 = new ListaComponent();
        var lista4 = new ListaComponent();
        var lista5 = new ListaComponent();
        var lista6 = new ListaComponent();

        lista1._id = "1";
        lista1.nome = "Início do mês";
        lista1.descricao = "Lista com os itens que devem ser comprados todo inicio de mês";
        lista1.produtos = this.produtos;

        lista2._id = "2";
        lista2.nome = "Afim de bobeira";
        lista2.descricao = "Lista com os itens que devem ser comprados quando quiser comer bobeira";
        lista2.produtos = this.produtos;

        lista3._id = "3";
        lista3.nome = "Produtos de limpeza";
        lista3.descricao = "Lista com os itens que devem ser comprados para limpeza da casa";
        lista3.produtos = this.produtos;

        lista4._id = "4";
        lista4.nome = "Dieta";
        lista4.descricao = "Lista com os itens que devem ser comprados para minha dieta";
        lista4.produtos = this.produtos;

        lista5._id = "5";
        lista5.nome = "Para os dias de frio";
        lista5.descricao = "Lista com os itens que devem ser comprados quando o frio estiver mais forte";
        lista5.produtos = this.produtos;

        lista6._id = "6";
        lista6.nome = "Os básicos";
        lista6.descricao = "Lista com os itens básicos que devem ter em casa";
        lista6.produtos = this.produtos;

        this.listas.push(lista1);
        this.listas.push(lista2);
        this.listas.push(lista3);
        this.listas.push(lista4);
        this.listas.push(lista5);
        this.listas.push(lista6);
    }
 }