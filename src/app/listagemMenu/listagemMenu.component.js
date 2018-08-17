"use strict";
/*
 * listagemMenu.component.ts
 * Vers�o: <0.1>
 * No Copyright
 *
 * Esta classe lista todos os livros cadastrados
   no sistema
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
var produto_service_1 = require("../produto/produto.service");
var usuario_service_1 = require("../usuario/usuario.service");
var helper_service_1 = require("../helper/helper.service");
var services_service_1 = require("../services/services.service");
var listagemMenu_service_1 = require("../listagemMenu/listagemMenu.service");
var router_1 = require("@angular/router");
;
var ListagemMenuComponent = /** @class */ (function () {
    function ListagemMenuComponent(service4, service, service2, service3, router, serviceHelper) {
        var _this = this;
        this.produtos = [];
        this.mensagem = '';
        this.router = router;
        this.produtoService = service;
        this.serviceHelper = serviceHelper;
        this.services = service4;
        this.requisicaoSendoRealizada = false;
        this.produtos = this.produtoService.getProductList();
        if (this.produtos.length == 0) {
            this.requisicaoSendoRealizada = true;
            this.services.buscaObjeto("produto")
                .subscribe(function (lista) {
                lista.forEach(function (atual) {
                    atual.foto = "https://igroceries-20e9.restdb.io//media/" + atual.foto[0];
                    atual.validade = _this.serviceHelper.formataData(new Date(atual.validade));
                    atual.valor = _this.serviceHelper.formataValor(atual.valor);
                });
                _this.produtos = lista;
                _this.produtoService.setProductList(_this.produtos);
                _this.requisicaoSendoRealizada = false;
            });
        }
        this.listagemMenuService = service2;
        this.menuLogin = this.listagemMenuService.getClass();
        this.UsuarioService = service3;
        this.usuarioAutenticado = this.UsuarioService.getAutenticado();
    }
    ListagemMenuComponent.prototype.verificaRoute = function (livro) {
        if (!this.usuarioAutenticado) {
            this.mensagem = "Faça o Login para enviar a mensagem";
        }
        else {
            this.produtoService.setProduct(livro);
            this.router.navigateByUrl("/cadastroMensagem");
        }
    };
    ListagemMenuComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'listagemMenu',
            templateUrl: './listagemMenu.component.html',
            styleUrls: ['./listagemMenu.component.css']
        }),
        __metadata("design:paramtypes", [services_service_1.ServicesService, produto_service_1.ProdutoService, listagemMenu_service_1.ListagemMenuService, usuario_service_1.UsuarioService, router_1.Router, helper_service_1.HelperService])
    ], ListagemMenuComponent);
    return ListagemMenuComponent;
}());
exports.ListagemMenuComponent = ListagemMenuComponent;
//# sourceMappingURL=listagemMenu.component.js.map