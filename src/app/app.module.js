"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var produto_module_1 = require("./produto/produto.module");
var listagemMenu_module_1 = require("./listagemMenu/listagemMenu.module");
var usuario_module_1 = require("./usuario/usuario.module");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var painel_module_1 = require("./painel/painel.module");
var cadastroUsuario_component_1 = require("./cadastroUsuario/cadastroUsuario.component");
var listagemMenu_component_1 = require("./listagemMenu/listagemMenu.component");
var endereco_module_1 = require("./endereco/endereco.module");
var menu_component_1 = require("./menu/menu.component");
var login_component_1 = require("./login/login.component");
var autenticacao_module_1 = require("./autenticacao/autenticacao.module");
var contaUsuario_component_1 = require("./contaUsuario/contaUsuario.component");
var app_routes_1 = require("./app.routes");
var forms_1 = require("@angular/forms");
var listaProdutosCarrinho_module_1 = require("./listaProdutosCarrinho/listaProdutosCarrinho.module");
var ofertas_module_1 = require("./ofertas/ofertas.module");
var helper_module_1 = require("./helper/helper.module");
var listaProdutosCarrinho_component_1 = require("./listaProdutosCarrinho/listaProdutosCarrinho.component");
var cartao_module_1 = require("./cartao/cartao.module");
var compra_module_1 = require("./compra/compra.module");
var services_module_1 = require("./services/services.module");
var ofertas_component_1 = require("./ofertas/ofertas.component");
var carrinho_component_1 = require("./carrinho/carrinho.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                produto_module_1.ProdutoModule,
                http_1.HttpModule,
                painel_module_1.PainelModule,
                app_routes_1.routing,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                listaProdutosCarrinho_module_1.ListaProdutosCarrinhoModule,
                usuario_module_1.UsuarioModule,
                endereco_module_1.EnderecoModule,
                compra_module_1.CompraModule,
                cartao_module_1.CartaoModule,
                listagemMenu_module_1.ListagemMenuModule,
                helper_module_1.HelperModule,
                autenticacao_module_1.AutenticacaoModule,
                services_module_1.ServicesModule,
                ofertas_module_1.OfertasModule
            ],
            declarations: [app_component_1.AppComponent, cadastroUsuario_component_1.CadastroUsuarioComponent, menu_component_1.MenuComponent, contaUsuario_component_1.ContaUsuarioComponent, listagemMenu_component_1.ListagemMenuComponent, login_component_1.LoginComponent, ofertas_component_1.OfertasComponent, carrinho_component_1.CarrinhoComponent, listaProdutosCarrinho_component_1.ListaProdutosCarrinhoComponent],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map