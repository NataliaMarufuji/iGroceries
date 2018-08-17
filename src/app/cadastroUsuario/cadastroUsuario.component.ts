/*
 * cadastroUsuario.component.ts
 * Vers�o: <0.1>
 * No Copyright 
 *
 * Esta classe representa a abstra��o do cadastro de
   usu�rio levando em considera��o seus determinados 
   atributos
 */

import { Component } from '@angular/core';
import { UsuarioComponent } from '../usuario/usuario.component';
import { EnderecoComponent } from '../endereco/endereco.component';
import { AutenticacaoComponent } from '../autenticacao/autenticacao.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';
import { ServicesService } from '../services/services.service';
import { HelperService } from '../helper/helper.service';
import { EnderecoService } from '../endereco/endereco.service';
import { AutenticacaoService } from '../autenticacao/autenticacao.service';
import { ProdutoComponent } from '../produto/produto.component';
import { ServicesComponent } from '../services/services.component';
import {Logger} from "../logger";

@Component({
    moduleId: module.id,
    selector: 'cadastroUsuario',
    templateUrl: './cadastroUsuario.component.html',
    styleUrls: ['./cadastroUsuario.component.css']
})
export class CadastroUsuarioComponent { 

    usuario: UsuarioComponent = new UsuarioComponent();
    endereco: EnderecoComponent = new EnderecoComponent();
    autenticacao: AutenticacaoComponent = new AutenticacaoComponent();
    service: UsuarioService;
    service2: ServicesService;
    service4: AutenticacaoService;
    helperService: HelperService;
    route: ActivatedRoute;
    router: Router;
    requisicaoSendoRealizada: boolean;
    mensagem: string = '';
    isEdicao: boolean = false;
    erro: boolean = false;
    produtos: ProdutoComponent[] = [];
    

    constructor(helperService: HelperService, service: UsuarioService, fb: FormBuilder, route: ActivatedRoute, router: Router, service2: ServicesService,  service4: AutenticacaoService){

        this.service = service;    
        this.service2 = service2; 
        this.service4 = service4;
        this.helperService = helperService;

        this.route = route;
        this.router = router;
        this.requisicaoSendoRealizada = false;
        this.helperService.retornaScriptMascaras();
    }

    cadastraUsuario(){
        console.log("teste cadastro");
        var objetoParaService = new ServicesComponent();
        objetoParaService.url = "endereco";
        objetoParaService.objeto = this.endereco;

        if(this.validaCamposUsuario()){
            this.requisicaoSendoRealizada = true;
            this.service2.cadastra(objetoParaService).subscribe(params => {
                this.usuario.endereco = params._id;
                objetoParaService.url = "usuario";
                objetoParaService.objeto = this.usuario;

                this.service2.cadastra(objetoParaService).subscribe(params => {
                    this.autenticacao.usuario = params._id;    
                    objetoParaService.url = "autenticacao";
                    objetoParaService.objeto = this.autenticacao;

                    this.service2.cadastra(objetoParaService).subscribe(params => {
                        this.requisicaoSendoRealizada = false;
                        this.service.setAutenticado(true);
                        this.service.setUser(this.usuario);
                        this.router.navigateByUrl("/menu");
                    });
                });
            });
         }
      } 

    validaCamposUsuario(){
        if(this.usuario.nome == "" ||this.usuario.nome == undefined ){
            this.erro = true;
            this.mensagem = 'O nome não pode estar em branco';
            return;
        }

        if(this.usuario.sobrenome == "" ||this.usuario.sobrenome == undefined ){
            this.erro = true;
            this.mensagem = 'O sobrenome não pode estar em branco';
            return;
        }

        if(this.usuario.cpf == "" ||this.usuario.cpf == undefined ){
            this.erro = true;
            this.mensagem = 'O CPF não pode estar em branco';
            return;
        }

        if(this.usuario.email == "" ||this.usuario.email == undefined ){
            this.erro = true;
            this.mensagem = 'O email não pode estar em branco';
            return;
        }

        if(this.autenticacao.senha == "" ||this.autenticacao.senha == undefined ){
            this.erro = true;
            this.mensagem = 'A senha não pode estar em branco';
            return;
        }

        if(!this.service4.verificaSenhasIguais(this.autenticacao.senha, this.autenticacao.confirmaSenha)){
            this.erro = true;
            this.mensagem = 'As senhas devem ser iguais';
            return;
        }

        this.validaCamposEndereco();
        
        return true;
    }

    validaCamposEndereco(){
        if(this.endereco.endereco == "" ||this.endereco.endereco == undefined ){
            this.erro = true;
            this.mensagem = 'O endereço não pode estar em branco';
            return;
        }

        if(this.endereco.numero == "" ||this.endereco.numero == undefined ){
            this.erro = true;
            this.mensagem = 'O número não pode estar em branco, caso não possua preencha S/N.';
            return;
        }

        if(this.endereco.cep == "" ||this.endereco.cep == undefined ){
            this.erro = true;
            this.mensagem = 'O CEP não pode estar em branco';
            return;
        }

        return true;
    }

    apagaMensagemDeErro(){
        this.erro = false;
    }

}