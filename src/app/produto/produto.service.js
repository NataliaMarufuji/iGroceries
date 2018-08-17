"use strict";
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
var http_1 = require("@angular/http");
var produto_component_1 = require("./produto.component");
var core_1 = require("@angular/core");
var ProdutoService = /** @class */ (function () {
    function ProdutoService(http) {
        this._listaProdutos = [];
        this._listaProdutosOfertas = [];
        this.http = http;
        this.options = new http_1.RequestOptions({
            headers: new http_1.Headers({
                "content-type": "application/json",
                "x-apikey": "5b30d8500c346a20d90a5e31",
                "cache-control": "no-cache"
            })
        });
    }
    ProdutoService.prototype.setProduct = function (produto) {
        this._produto = produto;
    };
    ProdutoService.prototype.getProduct = function () {
        return this._produto;
    };
    ProdutoService.prototype.setProductList = function (listaProdutos) {
        this._listaProdutos = listaProdutos;
    };
    ProdutoService.prototype.getProductList = function () {
        return this._listaProdutos;
    };
    ProdutoService.prototype.setProductSaleList = function (listaProdutosOfertas) {
        this._listaProdutosOfertas = listaProdutosOfertas;
    };
    ProdutoService.prototype.getProductSaleList = function () {
        return this._listaProdutosOfertas;
    };
    ProdutoService.prototype.buscaPorId = function (lista, id) {
        var produto = new produto_component_1.ProdutoComponent();
        lista.forEach(function (atual) {
            if (atual.id == id) {
                produto = atual;
            }
        });
        return produto;
    };
    ProdutoService.prototype.buscaImagemProduto = function (idImagem) {
        return this.http
            .get("https://rdb-simpledb.restdb.io/media/" + idImagem, this.options);
    };
    ProdutoService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ProdutoService);
    return ProdutoService;
}());
exports.ProdutoService = ProdutoService;
//# sourceMappingURL=produto.service.js.map