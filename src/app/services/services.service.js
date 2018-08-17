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
var ServicesService = /** @class */ (function () {
    function ServicesService(http) {
        this._listaObjetos = [];
        this._listaProdutosOfertas = [];
        this.http = http;
        this.options = new http_1.RequestOptions({
            headers: new http_1.Headers({
                "content-type": "application/json",
                "x-apikey": "5b30d8500c346a20d90a5e31",
                "cache-control": "no-cache"
            })
        });
    }
    ServicesService.prototype.setObject = function (objeto) {
        this._objeto = objeto;
    };
    ServicesService.prototype.getObject = function () {
        return this._objeto;
    };
    ServicesService.prototype.setObjectList = function (listaObjetos) {
        this._listaObjetos = listaObjetos;
    };
    ServicesService.prototype.getObjectList = function () {
        return this._listaObjetos;
    };
    ServicesService.prototype.lista = function (objeto) {
        return this.http
            .get(objeto.url)
            .map(function (res) { return res.json(); });
    };
    ServicesService.prototype.remove = function (objeto) {
        return this.http.delete(objeto.url + '/' + objeto.id);
    };
    ServicesService.prototype.atualiza = function (objeto) {
        return this.http
            .put("https://igroceries-20e9.restdb.io/rest/" + objeto.url + "/" + objeto.id, JSON.stringify(objeto.objeto), this.options)
            .map(function (res) { return res.json(); });
    };
    ServicesService.prototype.cadastra = function (objeto) {
        return this.http
            .post("https://igroceries-20e9.restdb.io/rest/" + objeto.url, JSON.stringify(objeto.objeto), this.options)
            .map(function (res) { return res.json(); });
    };
    ServicesService.prototype.buscaObjeto = function (url) {
        return this.http
            .get("https://igroceries-20e9.restdb.io/rest/" + url, this.options)
            .map(function (res) { return res.json(); });
    };
    ServicesService.prototype.buscaObjetoPorID = function (url, id) {
        return this.http
            .get("https://igroceries-20e9.restdb.io/rest/" + url + "/" + id, this.options)
            .map(function (res) { return res.json(); });
    };
    ServicesService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ServicesService);
    return ServicesService;
}());
exports.ServicesService = ServicesService;
var MensagemCadastro = /** @class */ (function () {
    function MensagemCadastro(_mensagem, _inclusao) {
        this._mensagem = _mensagem;
        this._inclusao = _inclusao;
        this._mensagem = _mensagem;
        this._inclusao = _inclusao;
    }
    Object.defineProperty(MensagemCadastro.prototype, "mensagem", {
        get: function () {
            return this._mensagem;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MensagemCadastro.prototype, "inclusao", {
        get: function () {
            return this._inclusao;
        },
        enumerable: true,
        configurable: true
    });
    return MensagemCadastro;
}());
exports.MensagemCadastro = MensagemCadastro;
//# sourceMappingURL=services.service.js.map