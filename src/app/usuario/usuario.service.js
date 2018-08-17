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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var UsuarioService = /** @class */ (function () {
    function UsuarioService(http) {
    }
    Object.defineProperty(UsuarioService.prototype, "projects", {
        get: function () {
            return this._user;
        },
        enumerable: true,
        configurable: true
    });
    UsuarioService.prototype.setUser = function (user) {
        this._user = user;
    };
    UsuarioService.prototype.getUser = function () {
        return this._user;
    };
    UsuarioService.prototype.setUserAdress = function (adress) {
        this._user.endereco = adress;
    };
    UsuarioService.prototype.getUserAdress = function () {
        return this._user.endereco;
    };
    UsuarioService.prototype.setAutenticado = function (autenticado) {
        this._autenticado = autenticado;
    };
    UsuarioService.prototype.getAutenticado = function () {
        return this._autenticado;
    };
    UsuarioService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], UsuarioService);
    return UsuarioService;
}());
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=usuario.service.js.map