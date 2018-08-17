"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var cartao_component_1 = require("./cartao.component");
var cartao_service_1 = require("./cartao.service");
var CartaoModule = /** @class */ (function () {
    function CartaoModule() {
    }
    CartaoModule = __decorate([
        core_1.NgModule({
            declarations: [cartao_component_1.CartaoComponent],
            exports: [cartao_component_1.CartaoComponent],
            providers: [cartao_service_1.CartaoService]
        })
    ], CartaoModule);
    return CartaoModule;
}());
exports.CartaoModule = CartaoModule;
//# sourceMappingURL=cartao.module.js.map