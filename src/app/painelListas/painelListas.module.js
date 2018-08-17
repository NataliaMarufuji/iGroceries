"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var painelListas_component_1 = require("./painelListas.component");
var PainelListasModule = /** @class */ (function () {
    function PainelListasModule() {
    }
    PainelListasModule = __decorate([
        core_1.NgModule({
            declarations: [painelListas_component_1.PainelListasComponent],
            exports: [painelListas_component_1.PainelListasComponent]
        })
    ], PainelListasModule);
    return PainelListasModule;
}());
exports.PainelListasModule = PainelListasModule;
//# sourceMappingURL=painelListas.module.js.map