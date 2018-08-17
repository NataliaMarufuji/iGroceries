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
var usuario_service_1 = require("../usuario/usuario.service");
var produto_service_1 = require("../produto/produto.service");
var CarrinhoComponent = /** @class */ (function () {
    function CarrinhoComponent(service, userService) {
        this.usuario = new usuario_component_1.UsuarioComponent();
        this.produtos = [];
        this.mensagem = '';
        this.service = userService;
    }
    CarrinhoComponent.prototype.logoutClicked = function (event) {
        this.service.setAutenticado(false);
    };
    CarrinhoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'carrinho',
            templateUrl: './carrinho.component.html',
            styleUrls: ['./carrinho.component.css']
        }),
        __metadata("design:paramtypes", [produto_service_1.ProdutoService, usuario_service_1.UsuarioService])
    ], CarrinhoComponent);
    return CarrinhoComponent;
}());
exports.CarrinhoComponent = CarrinhoComponent;
//# sourceMappingURL=carrinho.module.js.map