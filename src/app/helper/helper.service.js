"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HelperService = /** @class */ (function () {
    function HelperService() {
    }
    HelperService.prototype.formataData = function (data) {
        var dia = data.getDate();
        var mes = data.getMonth() + 1;
        var diaString;
        var mesString;
        var diaEntreZeroENove = false;
        var mesEntreZeroENove = false;
        if (this.diaOuMesEntreZeroENove(dia)) {
            diaString = "0" + dia;
            diaEntreZeroENove = true;
        }
        if (this.diaOuMesEntreZeroENove(mes)) {
            mesString = "0" + mes;
            mesEntreZeroENove = true;
        }
        if (diaEntreZeroENove && !mesEntreZeroENove) {
            return diaString + "/" + mes + "/" + data.getFullYear();
        }
        else if (!diaEntreZeroENove && mesEntreZeroENove) {
            return data.getDate() + "/" + mesString + "/" + data.getFullYear();
        }
        else if (diaEntreZeroENove && mesEntreZeroENove) {
            return diaString + "/" + mesString + "/" + data.getFullYear();
        }
        else {
            return data.getDate() + "/" + mes + "/" + data.getFullYear();
        }
    };
    HelperService.prototype.formataDataCartao = function (data) {
        var mes = data.getMonth() + 1;
        if (this.diaOuMesEntreZeroENove(mes)) {
            return "0" + mes + "/" + data.getFullYear();
        }
        else {
            return mes + "/" + data.getFullYear();
        }
    };
    HelperService.prototype.formataValor = function (valor) {
        var valorString = valor.toString();
        var splitted = valorString.split(".");
        if (splitted[1].length == 1) {
            return splitted[0] + "." + splitted[1] + "0";
        }
        else if (splitted[1].length == 0) {
            return splitted[0] + ".00";
        }
        else {
            return valorString;
        }
    };
    HelperService.prototype.retornaScriptModal = function () {
        return $.getScript('app/helper/modal.min.js');
    };
    HelperService.prototype.retornaScripCollapse = function () {
        return $.getScript('app/helper/helper.min.js');
    };
    HelperService.prototype.retornaScriptToast = function (frase) {
        return $.getScript('app/helper/toast.min.js', function () {
            mostraToast(frase);
        });
    };
    HelperService.prototype.retornaScriptDeModal = function (modalId) {
        return $.getScript('app/helper/modal.min.js', function () {
            inicializaModal(modalId);
        });
    };
    HelperService.prototype.retornaScriptMascaras = function () {
        return $.getScript('app/helper/mascaras.min.js');
    };
    HelperService.prototype.diaOuMesEntreZeroENove = function (numero) {
        if (numero == 1 || numero == 2 || numero == 3 || numero == 4 || numero == 5 || numero == 6
            || numero == 7 || numero == 8 || numero == 9) {
            return true;
        }
        return false;
    };
    HelperService.prototype.retornaQuantidadeDeProdutosCarrinho = function (produtos) {
        var quantidade = 0;
        produtos.forEach(function (atual) {
            quantidade += atual.quantidade;
        });
        return quantidade;
    };
    HelperService = __decorate([
        core_1.Injectable()
    ], HelperService);
    return HelperService;
}());
exports.HelperService = HelperService;
//# sourceMappingURL=helper.service.js.map