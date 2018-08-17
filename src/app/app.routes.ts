import { RouterModule, Routes } from '@angular/router';
import { CadastroUsuarioComponent } from './cadastroUsuario/cadastroUsuario.component';
import { ListagemListasComponent } from './listagemLista/listagemLista.component';
import { ListagemUsuarioComponent } from './listagemUsuario/listagemUsuario.component';
import { MenuComponent } from './menu/menu.component';
import { RemocaoContaComponent } from './remocaoConta/remocaoConta.component';
import { AutenticacaoComponent } from './autenticacao/autenticacao.component';
import { LoginComponent } from './login/login.component';
import { ContaUsuarioComponent } from './contaUsuario/contaUsuario.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

const appRoutes: Routes = [

    { path: '', component: MenuComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'contaUsuario', component: ContaUsuarioComponent },
    { path: 'cadastroUsuario', component: CadastroUsuarioComponent },
    { path: 'cadastroUsuario/:id', component: CadastroUsuarioComponent },
    { path: 'remocaoConta', component: RemocaoContaComponent },
    { path: 'ofertas', component: OfertasComponent },
    { path: 'meuCarrinho', component: CarrinhoComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', component: MenuComponent }
];

export const routing = RouterModule.forRoot(appRoutes);