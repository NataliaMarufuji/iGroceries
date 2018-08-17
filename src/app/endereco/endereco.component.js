"use strict";
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
var EnderecoComponent = /** @class */ (function () {
    function EnderecoComponent() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], EnderecoComponent.prototype, "endereco", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], EnderecoComponent.prototype, "complemento", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], EnderecoComponent.prototype, "numero", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], EnderecoComponent.prototype, "cep", void 0);
    EnderecoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'endereco',
            templateUrl: './endereco.component.html'
        })
    ], EnderecoComponent);
    return EnderecoComponent;
}());
exports.EnderecoComponent = EnderecoComponent;
//# sourceMappingURL=endereco.component.js.map