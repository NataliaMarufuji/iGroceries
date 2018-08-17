"use strict";
/*
 * menu.component.ts
 * Vers�o: <0.1>
 * No Copyright
 *
 * Esta classe � respons�vel pela listagem
   do menu principal
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
var router_1 = require("@angular/router");
var produto_service_1 = require("../produto/produto.service");
var listagemMenu_service_1 = require("../listagemMenu/listagemMenu.service");
var usuario_service_1 = require("../usuario/usuario.service");
var helper_service_1 = require("../helper/helper.service");
var listaProdutosCarrinho_service_1 = require("../listaProdutosCarrinho/listaProdutosCarrinho.service");
var MenuComponent = /** @class */ (function () {
    function MenuComponent(service, service2, service3, service4, service5, route, router) {
        this.produtos = [];
        this.route = route;
        this.router = router;
        this.produtoService = service;
        this.listagemMenuService = service2;
        this.usuarioService = service3;
        this.listagemProdutosCarrinhoService = service5;
        this.helperService = service4;
        this.listagemMenuService.setClass(false);
        this.usuarioAutenticado = this.usuarioService.getAutenticado();
        this.produtos = this.listagemProdutosCarrinhoService.getProductList();
        this.usuario = this.usuarioService.getUser();
    }
    MenuComponent.prototype.verificaAcao = function (acao) {
        if (acao == 1) {
            this.router.navigateByUrl("/contaUsuario");
        }
        else if (acao == 2) {
            this.logoutClicked();
        }
    };
    MenuComponent.prototype.logoutClicked = function () {
        this.usuarioService.setAutenticado(false);
        location.reload();
    };
    MenuComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'menu-inicial',
            templateUrl: './menu.component.html',
            styleUrls: ['./menu.component.css']
        }),
        __metadata("design:paramtypes", [produto_service_1.ProdutoService, listagemMenu_service_1.ListagemMenuService, usuario_service_1.UsuarioService, helper_service_1.HelperService, listaProdutosCarrinho_service_1.ListaProdutosCarrinhoService, router_1.ActivatedRoute, router_1.Router])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map