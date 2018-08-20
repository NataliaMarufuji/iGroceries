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
var CartaoService = /** @class */ (function () {
    function CartaoService(http) {
        this._cardsList = [];
    }
    CartaoService.prototype.setCard = function (card) {
        this._card = card;
    };
    CartaoService.prototype.getCard = function () {
        return this._card;
    };
    CartaoService.prototype.setCardslist = function (cardsList) {
        this._cardsList = cardsList;
    };
    CartaoService.prototype.getCardslist = function () {
        return this._cardsList;
    };
    CartaoService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], CartaoService);
    return CartaoService;
}());
exports.CartaoService = CartaoService;
//# sourceMappingURL=cartao.service.js.map