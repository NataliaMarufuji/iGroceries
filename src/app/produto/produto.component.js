"use strict";
/*
 * livro.component.ts
 * Vers�o: <0.1>
 * No Copyright
 *
 * Esta classe representa a abstra��o do livro
   e seus atributos
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
var ProdutoComponent = /** @class */ (function () {
    function ProdutoComponent() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ProdutoComponent.prototype, "nome", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], ProdutoComponent.prototype, "valor", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], ProdutoComponent.prototype, "quantidade", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Date)
    ], ProdutoComponent.prototype, "dataValidade", void 0);
    ProdutoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'produto',
            templateUrl: './produto.component.html',
            styleUrls: ['./produto.component.css']
        })
    ], ProdutoComponent);
    return ProdutoComponent;
}());
exports.ProdutoComponent = ProdutoComponent;
//# sourceMappingURL=produto.component.js.map