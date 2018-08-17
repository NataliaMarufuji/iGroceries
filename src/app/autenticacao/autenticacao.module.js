"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var autenticacao_component_1 = require("./autenticacao.component");
var autenticacao_service_1 = require("./autenticacao.service");
var AutenticacaoModule = /** @class */ (function () {
    function AutenticacaoModule() {
    }
    AutenticacaoModule = __decorate([
        core_1.NgModule({
            declarations: [autenticacao_component_1.AutenticacaoComponent],
            exports: [autenticacao_component_1.AutenticacaoComponent],
            providers: [autenticacao_service_1.AutenticacaoService]
        })
    ], AutenticacaoModule);
    return AutenticacaoModule;
}());
exports.AutenticacaoModule = AutenticacaoModule;
//# sourceMappingURL=autenticacao.module.js.map