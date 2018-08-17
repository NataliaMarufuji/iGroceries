/*
 * listagemUsuario.component.ts
 * Versão: <0.1>
 * No Copyright 
 *
 * Utilizado para listar todos os usuários
   do sistema
 */

import { Component } from '@angular/core';
import { UsuarioComponent } from '../usuario/usuario.component';
import { UsuarioService } from '../usuario/usuario.service';

@Component({
    moduleId: module.id,
    selector: 'listagemUsuario',
    templateUrl: './listagemUsuario.component.html',
    styleUrls: ['./listagemUsuario.component.css']
})

export class ListagemUsuarioComponent {

    usuario: UsuarioComponent;
    service: UsuarioService;

    constructor(service: UsuarioService) {
        this.service = service;
        var usuario = this.service.getUser();
        this.usuario = usuario;
    }
 }