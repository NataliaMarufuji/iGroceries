"use strict";
/*
 * listagem.component.ts
 * Versão: <0.1>
 * No Copyright
 *
 * Esta classe lista todos os livros de um
   determinado usuário
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
var mensagem_service_1 = require("../mensagem/mensagem.service");
var usuario_service_1 = require("../usuario/usuario.service");
var usuario_component_1 = require("../usuario/usuario.component");
var logger_1 = require("../logger");
var ListagemMensagemComponent = /** @class */ (function () {
    function ListagemMensagemComponent(service, service2) {
        var _this = this;
        this.mensagens = [];
        this.mensagem = '';
        this.service2 = service2;
        this.service = service;
        this.service
            .lista()
            .subscribe(function (lista) {
            var listagem, _a = void 0;
            var usuarioLogado = new usuario_component_1.UsuarioComponent;
            usuarioLogado = _this.service2.getUser();
            lista.forEach(function (atual) {
                if (atual.mensagem != undefined) {
                    logger_1.Logger.debug(JSON.stringify(atual));
                    if (atual.usuario_id == usuarioLogado._id) {
                        logger_1.Logger.debug(JSON.stringify(atual));
                        listagem.push(atual);
                    }
                }
            });
            logger_1.Logger.debug(JSON.stringify(lista));
            _this.mensagens = listagem;
            logger_1.Logger.debug(JSON.stringify(_this.mensagens));
        });
    }
    ListagemMensagemComponent.prototype.remove = function (message, painel) {
        var _this = this;
        this.service
            .remove(message)
            .subscribe(function () {
            painel.fadeOut(function () {
                var novasMensagens = _this.mensagens.slice(0);
                var indice = novasMensagens.indexOf(message);
                novasMensagens.splice(indice, 1);
                _this.mensagens = novasMensagens;
                _this.mensagem = 'Mensagem removida com sucesso';
            });
        }, function (erro) {
            logger_1.Logger.error(erro);
            _this.mensagem = 'Não foi possível remover a mensagem';
        });
    };
    ListagemMensagemComponent.prototype.defineMensagem = function (id) {
        logger_1.Logger.debug('entrou ' + id);
        this.service.setDestinatario(id);
    };
    ListagemMensagemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'listagemMensagem',
            templateUrl: './listagemMensagem.component.html',
            styleUrls: ['./listagemMensagem.component.css']
        }),
        __metadata("design:paramtypes", [mensagem_service_1.MensagemService, usuario_service_1.UsuarioService])
    ], ListagemMensagemComponent);
    return ListagemMensagemComponent;
}());
exports.ListagemMensagemComponent = ListagemMensagemComponent;
//# sourceMappingURL=listagemMensagem.component.js.map