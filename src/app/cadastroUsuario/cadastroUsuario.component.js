"use strict";
/*
 * cadastroUsuario.component.ts
 * Vers�o: <0.1>
 * No Copyright
 *
 * Esta classe representa a abstra��o do cadastro de
   usu�rio levando em considera��o seus determinados
   atributos
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
var endereco_component_1 = require("../endereco/endereco.component");
var autenticacao_component_1 = require("../autenticacao/autenticacao.component");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var usuario_service_1 = require("../usuario/usuario.service");
var services_service_1 = require("../services/services.service");
var helper_service_1 = require("../helper/helper.service");
var autenticacao_service_1 = require("../autenticacao/autenticacao.service");
var services_component_1 = require("../services/services.component");
var CadastroUsuarioComponent = /** @class */ (function () {
    function CadastroUsuarioComponent(helperService, service, fb, route, router, service2, service4) {
        this.usuario = new usuario_component_1.UsuarioComponent();
        this.endereco = new endereco_component_1.EnderecoComponent();
        this.autenticacao = new autenticacao_component_1.AutenticacaoComponent();
        this.mensagem = '';
        this.isEdicao = false;
        this.erro = false;
        this.produtos = [];
        this.service = service;
        this.service2 = service2;
        this.service4 = service4;
        this.helperService = helperService;
        this.route = route;
        this.router = router;
        this.requisicaoSendoRealizada = false;
        this.helperService.retornaScriptMascaras();
    }
    CadastroUsuarioComponent.prototype.cadastraUsuario = function () {
        var _this = this;
        console.log("teste cadastro");
        var objetoParaService = new services_component_1.ServicesComponent();
        objetoParaService.url = "endereco";
        objetoParaService.objeto = this.endereco;
        if (this.validaCamposUsuario()) {
            this.requisicaoSendoRealizada = true;
            this.service2.cadastra(objetoParaService).subscribe(function (params) {
                _this.usuario.endereco = params._id;
                objetoParaService.url = "usuario";
                objetoParaService.objeto = _this.usuario;
                _this.service2.cadastra(objetoParaService).subscribe(function (params) {
                    _this.autenticacao.usuario = params._id;
                    objetoParaService.url = "autenticacao";
                    objetoParaService.objeto = _this.autenticacao;
                    _this.service2.cadastra(objetoParaService).subscribe(function (params) {
                        _this.requisicaoSendoRealizada = false;
                        _this.service.setAutenticado(true);
                        _this.service.setUser(_this.usuario);
                        _this.router.navigateByUrl("/menu");
                    });
                });
            });
        }
    };
    CadastroUsuarioComponent.prototype.validaCamposUsuario = function () {
        if (this.usuario.nome == "" || this.usuario.nome == undefined) {
            this.erro = true;
            this.mensagem = 'O nome não pode estar em branco';
            return;
        }
        if (this.usuario.sobrenome == "" || this.usuario.sobrenome == undefined) {
            this.erro = true;
            this.mensagem = 'O sobrenome não pode estar em branco';
            return;
        }
        if (this.usuario.cpf == "" || this.usuario.cpf == undefined) {
            this.erro = true;
            this.mensagem = 'O CPF não pode estar em branco';
            return;
        }
        if (this.usuario.email == "" || this.usuario.email == undefined) {
            this.erro = true;
            this.mensagem = 'O email não pode estar em branco';
            return;
        }
        if (this.autenticacao.senha == "" || this.autenticacao.senha == undefined) {
            this.erro = true;
            this.mensagem = 'A senha não pode estar em branco';
            return;
        }
        if (!this.service4.verificaSenhasIguais(this.autenticacao.senha, this.autenticacao.confirmaSenha)) {
            this.erro = true;
            this.mensagem = 'As senhas devem ser iguais';
            return;
        }
        this.validaCamposEndereco();
        return true;
    };
    CadastroUsuarioComponent.prototype.validaCamposEndereco = function () {
        if (this.endereco.endereco == "" || this.endereco.endereco == undefined) {
            this.erro = true;
            this.mensagem = 'O endereço não pode estar em branco';
            return;
        }
        if (this.endereco.numero == "" || this.endereco.numero == undefined) {
            this.erro = true;
            this.mensagem = 'O número não pode estar em branco, caso não possua preencha S/N.';
            return;
        }
        if (this.endereco.cep == "" || this.endereco.cep == undefined) {
            this.erro = true;
            this.mensagem = 'O CEP não pode estar em branco';
            return;
        }
        return true;
    };
    CadastroUsuarioComponent.prototype.apagaMensagemDeErro = function () {
        this.erro = false;
    };
    CadastroUsuarioComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'cadastroUsuario',
            templateUrl: './cadastroUsuario.component.html',
            styleUrls: ['./cadastroUsuario.component.css']
        }),
        __metadata("design:paramtypes", [helper_service_1.HelperService, usuario_service_1.UsuarioService, forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router, services_service_1.ServicesService, autenticacao_service_1.AutenticacaoService])
    ], CadastroUsuarioComponent);
    return CadastroUsuarioComponent;
}());
exports.CadastroUsuarioComponent = CadastroUsuarioComponent;
//# sourceMappingURL=cadastroUsuario.component.js.map