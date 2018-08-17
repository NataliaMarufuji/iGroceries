"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var compra_component_1 = require("./compra.component");
var compra_service_1 = require("./compra.service");
var CompraModule = /** @class */ (function () {
    function CompraModule() {
    }
    CompraModule = __decorate([
        core_1.NgModule({
            declarations: [compra_component_1.CompraComponent],
            exports: [compra_component_1.CompraComponent],
            providers: [compra_service_1.CompraService]
        })
    ], CompraModule);
    return CompraModule;
}());
exports.CompraModule = CompraModule;
//# sourceMappingURL=compra.module.js.map