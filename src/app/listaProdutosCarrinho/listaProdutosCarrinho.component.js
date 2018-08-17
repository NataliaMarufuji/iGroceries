"use strict";
/*
 * contaUsuario.ts
 * Vers�o: <0.1>
 * No Copyright
 *
 * Esta classe representa a abstra��o da conta
   de um usu�rio com seus atributos
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
var usuario_service_1 = require("../usuario/usuario.service");
var produto_service_1 = require("../produto/produto.service");
var listaProdutosCarrinho_service_1 = require("../listaProdutosCarrinho/listaProdutosCarrinho.service");
var compra_service_1 = require("../compra/compra.service");
var ListaProdutosCarrinhoComponent = /** @class */ (function () {
    function ListaProdutosCarrinhoComponent(service, service2, service3, userService) {
        this.produtos = [];
        this.service2 = service2;
        this.produtos = this.service2.getProductList();
        this.service3 = service3;
        this.verificaTotal();
        this.service = userService;
    }
    ListaProdutosCarrinhoComponent.prototype.verificaTotal = function () {
        var _this = this;
        this.total = 0.0;
        this.produtos.forEach(function (atual) {
            _this.total += atual.valorTotal;
        });
        this.service3.setTotal(this.total);
    };
    ListaProdutosCarrinhoComponent.prototype.removerProduto = function (produto) {
        var indexToRemove = this.produtos.indexOf(produto);
        if (indexToRemove !== -1) {
            this.produtos.splice(indexToRemove, 1);
            this.service2.setProductList(this.produtos);
            console.log(this.produtos);
            this.verificaTotal();
        }
    };
    ListaProdutosCarrinhoComponent.prototype.logoutClicked = function (event) {
        this.service.setAutenticado(false);
    };
    ListaProdutosCarrinhoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'listaProdutosCarrinho',
            templateUrl: './listaProdutosCarrinho.component.html',
            styleUrls: ['./listaProdutosCarrinho.component.css']
        }),
        __metadata("design:paramtypes", [produto_service_1.ProdutoService, listaProdutosCarrinho_service_1.ListaProdutosCarrinhoService, compra_service_1.CompraService, usuario_service_1.UsuarioService])
    ], ListaProdutosCarrinhoComponent);
    return ListaProdutosCarrinhoComponent;
}());
exports.ListaProdutosCarrinhoComponent = ListaProdutosCarrinhoComponent;
//# sourceMappingURL=listaProdutosCarrinho.component.js.map