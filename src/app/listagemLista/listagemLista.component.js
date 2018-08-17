"use strict";
/*
 * listagem.component.ts
 * Versão: <0.1>
 * No Copyright
 *
 * Esta classe lista todos os livros de um
   determinado usuário
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var lista_service_1 = require("../lista/lista.service");
var router_1 = require("@angular/router");
var lista_component_1 = require("../lista/lista.component");
var usuario_service_1 = require("../usuario/usuario.service");
var autenticacao_service_1 = require("../autenticacao/autenticacao.service");
var produto_component_1 = require("../produto/produto.component");
var logger_1 = require("../logger");
var ListagemListasComponent = /** @class */ (function () {
    function ListagemListasComponent(service, service2, service3, route, router) {
        this.listas = [];
        this.mensagem = '';
        this.produtos = [];
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
    ListagemListasComponent.prototype.remove = function (message, painel) {
        var _this = this;
        this.service
            .remove(message)
            .subscribe(function () {
            painel.fadeOut(function () {
                var novasMensagens = _this.listas.slice(0);
                var indice = novasMensagens.indexOf(message);
                novasMensagens.splice(indice, 1);
                _this.listas = novasMensagens;
                _this.mensagem = 'Mensagem removida com sucesso';
            });
        }, function (erro) {
            logger_1.Logger.error(erro);
            _this.mensagem = 'Não foi possível remover a mensagem';
        });
    };
    ListagemListasComponent.prototype.logoutClicked = function () {
        this.service2.setAutenticado(false);
        this.router.navigateByUrl("/menu");
    };
    ListagemListasComponent.prototype.constroiListaProdutosTest = function () {
        var produto1 = new produto_component_1.ProdutoComponent();
        var produto2 = new produto_component_1.ProdutoComponent();
        var produto3 = new produto_component_1.ProdutoComponent();
        var produto4 = new produto_component_1.ProdutoComponent();
        var produto5 = new produto_component_1.ProdutoComponent();
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
    };
    ListagemListasComponent.prototype.retornaDataFormatada = function (data) {
        var dia = data.getDay();
        var mes = data.getMonth();
        var ano = data.getFullYear();
        return dia + "/" + mes + "/" + ano;
    };
    ListagemListasComponent.prototype.controiListaTest = function () {
        this.constroiListaProdutosTest();
        var lista1 = new lista_component_1.ListaComponent();
        var lista2 = new lista_component_1.ListaComponent();
        var lista3 = new lista_component_1.ListaComponent();
        var lista4 = new lista_component_1.ListaComponent();
        var lista5 = new lista_component_1.ListaComponent();
        var lista6 = new lista_component_1.ListaComponent();
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
    };
    ListagemListasComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'listagemLista',
            templateUrl: './listagemLista.component.html',
            styleUrls: ['./listagemLista.component.css']
        }),
        __metadata("design:paramtypes", [lista_service_1.ListaService, usuario_service_1.UsuarioService, autenticacao_service_1.AutenticacaoService, router_1.ActivatedRoute, router_1.Router])
    ], ListagemListasComponent);
    return ListagemListasComponent;
}());
exports.ListagemListasComponent = ListagemListasComponent;
//# sourceMappingURL=listagemLista.component.js.map