import { NgModule }  from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProdutoModule } from './produto/produto.module';
import { ListagemMenuModule } from './listagemMenu/listagemMenu.module';
import { UsuarioModule } from './usuario/usuario.module';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { PainelModule } from './painel/painel.module';
import { CadastroUsuarioComponent } from './cadastroUsuario/cadastroUsuario.component';
import { ListagemMenuComponent } from './listagemMenu/listagemMenu.component';
import { ListagemListasComponent } from './listagemLista/listagemLista.component';
import { ListagemUsuarioComponent } from './listagemUsuario/listagemUsuario.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { EnderecoComponent } from './endereco/endereco.component';
import { EnderecoModule } from './endereco/endereco.module';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { AutenticacaoModule } from './autenticacao/autenticacao.module';
import { ContaUsuarioComponent } from './contaUsuario/contaUsuario.component';
import { routing }  from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaModule } from './lista/lista.module';
import { ListaProdutosCarrinhoModule } from './listaProdutosCarrinho/listaProdutosCarrinho.module';
import { OfertasModule } from './ofertas/ofertas.module';
import { HelperModule } from './helper/helper.module';
import { ListaProdutosCarrinhoComponent } from './listaProdutosCarrinho/listaProdutosCarrinho.component';
import { PainelListasModule } from './painelListas/painelListas.module';
import { CartaoModule } from './cartao/cartao.module';
import { CompraModule } from './compra/compra.module';
import { ServicesModule } from './services/services.module';
import { OfertasComponent } from './ofertas/ofertas.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { RemocaoContaComponent } from './remocaoConta/remocaoConta.component';

@NgModule({
    imports: [ 
        BrowserModule, 
        ProdutoModule, 
        HttpModule, 
        PainelModule,
        PainelListasModule, 
        routing, 
        FormsModule, 
        ReactiveFormsModule,
        ListaProdutosCarrinhoModule,
        ListaModule,
        UsuarioModule,
        EnderecoModule,
        CompraModule,
        CartaoModule,
        ListagemMenuModule,
        HelperModule,
        AutenticacaoModule,
        ServicesModule,
        OfertasModule
    ],
    declarations: [ AppComponent,CadastroUsuarioComponent, ListagemUsuarioComponent, MenuComponent, ContaUsuarioComponent, ListagemMenuComponent, ListagemListasComponent, LoginComponent, RemocaoContaComponent, OfertasComponent, CarrinhoComponent, ListaProdutosCarrinhoComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }