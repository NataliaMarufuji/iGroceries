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
;
var AutenticacaoComponent = /** @class */ (function () {
    function AutenticacaoComponent() {
        this.usuario = new usuario_component_1.UsuarioComponent();
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AutenticacaoComponent.prototype, "senha", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AutenticacaoComponent.prototype, "confirmaSenha", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AutenticacaoComponent.prototype, "email", void 0);
    AutenticacaoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'autenticacao',
            templateUrl: './autenticacao.component.html'
        })
    ], AutenticacaoComponent);
    return AutenticacaoComponent;
}());
exports.AutenticacaoComponent = AutenticacaoComponent;
//# sourceMappingURL=autenticacao.component.js.map