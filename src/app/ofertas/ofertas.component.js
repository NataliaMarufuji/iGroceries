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
var services_service_1 = require("../services/services.service");
var usuario_service_1 = require("../usuario/usuario.service");
var helper_service_1 = require("../helper/helper.service");
var listagemMenu_service_1 = require("../listagemMenu/listagemMenu.service");
var router_1 = require("@angular/router");
var listaProdutosCarrinho_service_1 = require("../listaProdutosCarrinho/listaProdutosCarrinho.service");
;
var OfertasComponent = /** @class */ (function () {
    function OfertasComponent(service, service2, service3, service5, router, serviceHelper, service4) {
        var _this = this;
        this.produtos = [];
        this.produtosCarrinhos = [];
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
        if (this.produtos.length == 0) {
            this.requisicaoSendoRealizada = true;
            this.service4.buscaObjeto("produto")
                .subscribe(function (lista) {
                lista.forEach(function (atual) {
                    if (atual.oferta) {
                        atual.foto = "https://igroceries-20e9.restdb.io//media/" + atual.foto[0];
                        atual.validade = _this.serviceHelper.formataData(new Date(atual.validade));
                        atual.valor = _this.serviceHelper.formataValor(atual.valor);
                        _this.produtos.push(atual);
                    }
                });
                _this.service.setProductSaleList(_this.produtos);
                _this.requisicaoSendoRealizada = false;
            });
        }
        this.menuLogin = this.service2.getClass();
    }
    OfertasComponent.prototype.verificaAcao = function (acao) {
        if (acao == 1) {
            this.router.navigateByUrl("/contaUsuario");
        }
        else if (acao == 2) {
            this.logoutClicked();
        }
    };
    OfertasComponent.prototype.logoutClicked = function () {
        this.service3.setAutenticado(false);
        this.router.navigateByUrl("/menu");
    };
    OfertasComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ofertas',
            templateUrl: './ofertas.component.html',
            styleUrls: ['./ofertas.component.css']
        }),
        __metadata("design:paramtypes", [produto_service_1.ProdutoService, listagemMenu_service_1.ListagemMenuService, usuario_service_1.UsuarioService, listaProdutosCarrinho_service_1.ListaProdutosCarrinhoService, router_1.Router, helper_service_1.HelperService, services_service_1.ServicesService])
    ], OfertasComponent);
    return OfertasComponent;
}());
exports.OfertasComponent = OfertasComponent;
//# sourceMappingURL=ofertas.component.js.map