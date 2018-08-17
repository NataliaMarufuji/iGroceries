"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var cadastroUsuario_component_1 = require("./cadastroUsuario/cadastroUsuario.component");
var menu_component_1 = require("./menu/menu.component");
var remocaoConta_component_1 = require("./remocaoConta/remocaoConta.component");
var login_component_1 = require("./login/login.component");
var contaUsuario_component_1 = require("./contaUsuario/contaUsuario.component");
var ofertas_component_1 = require("./ofertas/ofertas.component");
var carrinho_component_1 = require("./carrinho/carrinho.component");
var appRoutes = [
    { path: '', component: menu_component_1.MenuComponent },
    { path: 'menu', component: menu_component_1.MenuComponent },
    { path: 'contaUsuario', component: contaUsuario_component_1.ContaUsuarioComponent },
    { path: 'cadastroUsuario', component: cadastroUsuario_component_1.CadastroUsuarioComponent },
    { path: 'cadastroUsuario/:id', component: cadastroUsuario_component_1.CadastroUsuarioComponent },
    { path: 'remocaoConta', component: remocaoConta_component_1.RemocaoContaComponent },
    { path: 'ofertas', component: ofertas_component_1.OfertasComponent },
    { path: 'meuCarrinho', component: carrinho_component_1.CarrinhoComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: '**', component: menu_component_1.MenuComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map