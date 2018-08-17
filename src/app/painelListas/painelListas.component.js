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
var lista_service_1 = require("../lista/lista.service");
var usuario_service_1 = require("../usuario/usuario.service");
var router_1 = require("@angular/router");
var PainelListasComponent = /** @class */ (function () {
    function PainelListasComponent(elemento, service, service2, router) {
        this.mensagem = '';
        this.elemento = elemento;
        this.router = router;
        this.service = service;
        this.service2 = service2;
        this.usuarioAutenticado = this.service2.getAutenticado();
    }
    PainelListasComponent.prototype.fadeOut = function (cb) {
        $(this.elemento.nativeElement).fadeOut(cb);
    };
    PainelListasComponent.prototype.ngAfterViewInit = function () {
        $.getScript('app/modal/modal.min.js');
    };
    PainelListasComponent.prototype.verificaRoute = function (lista) {
        if (!this.usuarioAutenticado) {
            this.mensagem = "Faça o Login para enviar a mensagem";
        }
        else {
            this.service.setLista(lista);
            this.router.navigateByUrl("/cadastroMensagem");
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PainelListasComponent.prototype, "nome", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PainelListasComponent.prototype, "descricao", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], PainelListasComponent.prototype, "listaProdutos", void 0);
    PainelListasComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'painelListas',
            templateUrl: './painelListas.component.html',
            styleUrls: ['./painelListas.component.css']
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, lista_service_1.ListaService, usuario_service_1.UsuarioService, router_1.Router])
    ], PainelListasComponent);
    return PainelListasComponent;
}());
exports.PainelListasComponent = PainelListasComponent;
//# sourceMappingURL=painelListas.component.js.map