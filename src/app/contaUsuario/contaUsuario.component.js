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
var endereco_component_1 = require("../endereco/endereco.component");
var helper_service_1 = require("../helper/helper.service");
var compra_service_1 = require("../compra/compra.service");
var services_service_1 = require("../services/services.service");
var ContaUsuarioComponent = /** @class */ (function () {
    function ContaUsuarioComponent(service, service2, service3, service4, route, router) {
        var _this = this;
        this.usuario = new usuario_component_1.UsuarioComponent();
        this.endereco = new endereco_component_1.EnderecoComponent();
        this.produtos = [];
        this.listaCompras = [];
        this.listaComprasUsuario = [];
        this.route = route;
        this.router = router;
        this.service = service;
        this.service4 = service4;
        this.usuarioAutenticado = this.service.getAutenticado();
        this.usuario = this.service.getUser();
        this.endereco = this.usuario.endereco[0];
        this.service2 = service2;
        this.service2.retornaScripCollapse();
        this.service2.retornaScriptModal();
        this.service3 = service3;
        this.service4.buscaObjeto("compra")
            .subscribe(function (lista) {
            _this.listaCompras = lista;
            _this.service3.setShoppingList(_this.listaCompras);
            _this.buscaComprasUsuario();
        });
    }
    ContaUsuarioComponent.prototype.buscaComprasUsuario = function () {
        var _this = this;
        this.listaCompras.forEach(function (compraAtual) {
            if (compraAtual.usuario[0]._id == _this.usuario._id) {
                if (compraAtual.usuario[0].cartao != undefined) {
                    compraAtual.usuario[0].cartao[0].validade = _this.service2.formataDataCartao(new Date(compraAtual.usuario[0].cartao[0].validade));
                }
                _this.listaComprasUsuario.push(compraAtual);
            }
        });
        this.service3.setUserShoppingList(this.listaComprasUsuario);
    };
    ContaUsuarioComponent.prototype.verificaAcao = function (acao) {
        if (acao == 1) {
            this.router.navigateByUrl("/contaUsuario");
        }
        else if (acao == 2) {
            this.logoutClicked();
        }
    };
    ContaUsuarioComponent.prototype.logoutClicked = function () {
        this.service.setAutenticado(false);
        this.router.navigateByUrl('/menu');
    };
    ContaUsuarioComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'contaUsuario',
            templateUrl: './contaUsuario.component.html',
            styleUrls: ['./contaUsuario.component.css']
        }),
        __metadata("design:paramtypes", [usuario_service_1.UsuarioService, helper_service_1.HelperService, compra_service_1.CompraService, services_service_1.ServicesService, router_1.ActivatedRoute, router_1.Router])
    ], ContaUsuarioComponent);
    return ContaUsuarioComponent;
}());
exports.ContaUsuarioComponent = ContaUsuarioComponent;
//# sourceMappingURL=contaUsuario.component.js.map