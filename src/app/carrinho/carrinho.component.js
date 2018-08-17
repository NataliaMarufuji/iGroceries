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
var usuario_component_1 = require("../usuario/usuario.component");
var router_1 = require("@angular/router");
var usuario_service_1 = require("../usuario/usuario.service");
var listaProdutosCarrinho_service_1 = require("../listaProdutosCarrinho/listaProdutosCarrinho.service");
var endereco_component_1 = require("../endereco/endereco.component");
var services_component_1 = require("../services/services.component");
var cartao_component_1 = require("../cartao/cartao.component");
var compra_service_1 = require("../compra/compra.service");
var services_service_1 = require("../services/services.service");
var compra_component_1 = require("../compra/compra.component");
var helper_service_1 = require("../helper/helper.service");
var CarrinhoComponent = /** @class */ (function () {
    function CarrinhoComponent(helperService, service, service3, service4, service5, route, router) {
        this.usuario = new usuario_component_1.UsuarioComponent();
        this.endereco = new endereco_component_1.EnderecoComponent();
        this.cartao = new cartao_component_1.CartaoComponent();
        this.compra = new compra_component_1.CompraComponent();
        this.produtos = [];
        this.cartoes = [];
        this.bandeiras = [];
        this.objetoParaService = new services_component_1.ServicesComponent();
        this.route = route;
        this.router = router;
        this.usuarioService = service;
        this.listaProdutosCarrinhoService = service3;
        this.compraService = service4;
        this.services = service5;
        this.helperService = helperService;
        this.helperService.retornaScriptModal();
        this.helperService.retornaScriptMascaras();
        this.compraFinalizada = false;
        this.requisicaoSendoRealizada = false;
        this.requisicaoConcluida = false;
        this.cartaoJaSelecionado = false;
        this.iniciaBandeiras();
        this.usuarioAutenticado = this.usuarioService.getAutenticado();
        this.usuario = this.usuarioService.getUser();
        this.endereco = this.usuario.endereco[0];
        this.produtos = this.listaProdutosCarrinhoService.getProductList();
        this.totalCarrinho = this.compraService.getTotal();
        this.listaProdutosCarrinhoService.setCompraFinalizada(false);
        this.cartoes = this.usuario.cartao == undefined ? this.cartoes : this.usuario.cartao;
    }
    CarrinhoComponent.prototype.finalizaCompra = function () {
        if (this.produtos.length == 0) {
            this.helperService.retornaScriptToast('Adicione pelo menos 1 item em seu carrinho para fechar a lista');
        }
        else {
            this.listaProdutosCarrinhoService.setCompraFinalizada(true);
            this.compraFinalizada = true;
            this.helperService.retornaScriptModal();
        }
    };
    CarrinhoComponent.prototype.cancelarCompra = function () {
        this.listaProdutosCarrinhoService.setCompraFinalizada(false);
        this.compraFinalizada = false;
    };
    CarrinhoComponent.prototype.cadastrarCartao = function () {
        var _this = this;
        this.objetoParaService.url = "cartao";
        this.objetoParaService.objeto = this.cartao;
        var validade = "01/".concat(this.dataValidade);
        this.cartao.validade = new Date(validade);
        this.services.cadastra(this.objetoParaService)
            .subscribe(function (resp) {
            _this.cartaoSelecionado = _this.cartao;
            _this.cartaoJaSelecionado = true;
            _this.cartoes.push(resp._id);
            _this.usuario.cartao = _this.cartoes;
            _this.objetoParaService.url = "usuario";
            _this.objetoParaService.objeto = _this.usuario;
            _this.objetoParaService.id = _this.usuario._id;
            _this.services.atualiza(_this.objetoParaService)
                .subscribe(function (resp) {
                _this.compra.usuario = resp._id;
                _this.compra.produtos = _this.produtos;
                _this.compra.total = _this.totalCarrinho;
            });
        });
    };
    CarrinhoComponent.prototype.cadastraCompra = function () {
        var _this = this;
        this.compra.usuario = this.usuario;
        this.compra.produtos = this.produtos;
        this.compra.total = this.compraService.getTotal();
        ;
        this.requisicaoSendoRealizada = true;
        this.objetoParaService.url = "compra";
        this.objetoParaService.objeto = this.compra;
        this.services.cadastra(this.objetoParaService)
            .subscribe(function (resp) {
            _this.requisicaoSendoRealizada = false;
            _this.requisicaoConcluida = true;
            var products = [];
            _this.listaProdutosCarrinhoService.setProductList(products);
            $.getScript('app/carrinho/carrinho.min.js');
        });
    };
    CarrinhoComponent.prototype.iniciaBandeiras = function () {
        this.bandeiras.push("Bandeira do cartão");
        this.bandeiras.push("Visa");
        this.bandeiras.push("Mastercard");
        this.bandeiras.push("Elo");
    };
    CarrinhoComponent.prototype.verificaOpcaoCartao = function (event) {
        this.cartaoSelecionado = event;
        if (event == "Adicionar cartão") {
            this.cartao = new cartao_component_1.CartaoComponent();
            $.getScript('app/carrinho/carrinho2.min.js');
        }
        else {
            this.cartao = this.cartaoSelecionado;
            this.cartaoJaSelecionado = true;
        }
        console.log(this.cartaoSelecionado);
    };
    CarrinhoComponent.prototype.mostrarGridCartoes = function () {
        this.cartaoJaSelecionado = false;
        this.helperService.retornaScriptModal();
    };
    CarrinhoComponent.prototype.verificaAcao = function (acao) {
        if (acao == 1) {
            this.router.navigateByUrl("/contaUsuario");
        }
        else if (acao == 2) {
            this.logoutClicked();
        }
    };
    CarrinhoComponent.prototype.logoutClicked = function () {
        this.usuarioService.setAutenticado(false);
        this.router.navigateByUrl("/menu");
    };
    CarrinhoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'carrinho',
            templateUrl: './carrinho.component.html',
            styleUrls: ['./carrinho.component.css']
        }),
        __metadata("design:paramtypes", [helper_service_1.HelperService, usuario_service_1.UsuarioService, listaProdutosCarrinho_service_1.ListaProdutosCarrinhoService, compra_service_1.CompraService, services_service_1.ServicesService, router_1.ActivatedRoute, router_1.Router])
    ], CarrinhoComponent);
    return CarrinhoComponent;
}());
exports.CarrinhoComponent = CarrinhoComponent;
//# sourceMappingURL=carrinho.component.js.map