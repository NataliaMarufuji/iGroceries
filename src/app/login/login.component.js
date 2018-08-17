"use strict";
/*
 * login.component.ts
 * Versão: <0.1>
 * No Copyright
 *
 * Esta classe abtrai o login e a verificação e autenticação
   da conta logada no sistema
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
var autenticacao_component_1 = require("../autenticacao/autenticacao.component");
var router_1 = require("@angular/router");
;
var usuario_service_1 = require("../usuario/usuario.service");
var services_service_1 = require("../services/services.service");
var logger_1 = require("../logger");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(service, route, router, service2) {
        var _this = this;
        this.user = new usuario_component_1.UsuarioComponent();
        this.autenticacao = new autenticacao_component_1.AutenticacaoComponent();
        this.mensagem = "";
        this.route = route;
        this.router = router;
        this.erroAutenticacao = false;
        this.requisicaoSendoRealizada = false;
        this.service = service;
        this.service2 = service2;
        this.service2.buscaObjeto("autenticacao")
            .subscribe(function (lista) { return _this.listaAutenticacao = lista; });
        logger_1.Logger.info('Menu carregado');
    }
    LoginComponent.prototype.realizarAutenticacao = function () {
        var _this = this;
        logger_1.Logger.debug('Iniciando autenticação');
        var contador = 1;
        this.requisicaoSendoRealizada = true;
        this.listaAutenticacao.forEach(function (atual) {
            _this.service.buscaPorId(atual.usuario.toString())
                .subscribe(function (usuario) {
                if (usuario.email == _this.autenticacao.email
                    && atual.senha == _this.autenticacao.senha) {
                    _this.service.setAutenticado(true);
                    _this.service.setUser(usuario);
                    _this.erroAutenticacao = false;
                    _this.requisicaoSendoRealizada = false;
                    _this.router.navigateByUrl('/menu');
                }
                else {
                    if (contador == _this.listaAutenticacao.length && !_this.service.getAutenticado()) {
                        _this.service.setAutenticado(false);
                        _this.erroAutenticacao = true;
                        _this.requisicaoSendoRealizada = false;
                    }
                }
                contador++;
            });
        });
    };
    LoginComponent.prototype.reset = function () {
        this.autenticacao.email = '';
        this.autenticacao.senha = '';
    };
    LoginComponent.prototype.resetMessage = function () {
        this.erroAutenticacao = false;
        this.reset();
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        __metadata("design:paramtypes", [usuario_service_1.UsuarioService, router_1.ActivatedRoute, router_1.Router, services_service_1.ServicesService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map