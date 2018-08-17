"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var produto_component_1 = require("./produto.component");
var produto_pipes_1 = require("./produto.pipes");
var produto_service_1 = require("./produto.service");
var ProdutoModule = /** @class */ (function () {
    function ProdutoModule() {
    }
    ProdutoModule = __decorate([
        core_1.NgModule({
            declarations: [produto_component_1.ProdutoComponent, produto_pipes_1.FiltroPorTitulo],
            exports: [produto_component_1.ProdutoComponent, produto_pipes_1.FiltroPorTitulo],
            providers: [produto_service_1.ProdutoService]
        })
    ], ProdutoModule);
    return ProdutoModule;
}());
exports.ProdutoModule = ProdutoModule;
//# sourceMappingURL=produto.module.js.map