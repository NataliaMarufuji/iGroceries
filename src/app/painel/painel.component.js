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
var core_1 = require("@angular/core");
var produto_service_1 = require("../produto/produto.service");
var usuario_service_1 = require("../usuario/usuario.service");
var router_1 = require("@angular/router");
var listaProdutosCarrinho_service_1 = require("../listaProdutosCarrinho/listaProdutosCarrinho.service");
var helper_service_1 = require("../helper/helper.service");
var PainelComponent = /** @class */ (function () {
    function PainelComponent(elemento, service, service2, service3, router, serviceHelper) {
        this.combos = [];
        this.elemento = elemento;
        this.serviceHelper = serviceHelper;
        this.serviceHelper.retornaScriptModal();
        this.router = router;
        this.produtoService = service;
        this.productList = this.produtoService.getProductList();
        this.usuarioService = service2;
        this.usuarioAutenticado = this.usuarioService.getAutenticado();
        this.listaProdutosCarrinhoService = service3;
        this.inicializaCombo();
    }
    PainelComponent.prototype.fadeOut = function (cb) {
        $(this.elemento.nativeElement).fadeOut(cb);
    };
    PainelComponent.prototype.adicionarNoCarrinho = function (quantidade) {
        if (quantidade == "Quantidade") {
            this.serviceHelper.retornaScriptToast('Selecione a quantidade do produto');
            return;
        }
        else {
            var produto = this.produtoService.buscaPorId(this.productList, this.productId);
            var quantidadeAux = produto.quantidade;
            var listaDeProdutos = this.listaProdutosCarrinhoService.getProductList();
            produto.quantidade = parseInt(quantidade);
            produto.valorTotal = produto.valor * produto.quantidade;
            if (listaDeProdutos.includes(produto)) {
                var index = listaDeProdutos.indexOf(produto);
                produto.quantidade += quantidadeAux;
                listaDeProdutos[index] = produto;
                this.serviceHelper.retornaScriptToast('Item adicionado ao carrinho');
            }
            else {
                listaDeProdutos.push(produto);
                this.listaProdutosCarrinhoService.setProductList(listaDeProdutos);
                if (!this.usuarioAutenticado) {
                    this.router.navigateByUrl("/login");
                }
                else {
                    this.serviceHelper.retornaScriptToast('Item adicionado ao carrinho');
                }
            }
        }
    };
    PainelComponent.prototype.inicializaCombo = function () {
        this.combos.push("Quantidade");
        this.combos.push("1");
        this.combos.push("2");
        this.combos.push("3");
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PainelComponent.prototype, "titulo", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PainelComponent.prototype, "productId", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PainelComponent.prototype, "imagemProduto", void 0);
    PainelComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'painel',
            templateUrl: './painel.component.html',
            styleUrls: ['./painel.component.css']
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, produto_service_1.ProdutoService, usuario_service_1.UsuarioService, listaProdutosCarrinho_service_1.ListaProdutosCarrinhoService, router_1.Router, helper_service_1.HelperService])
    ], PainelComponent);
    return PainelComponent;
}());
exports.PainelComponent = PainelComponent;
//# sourceMappingURL=painel.component.js.map