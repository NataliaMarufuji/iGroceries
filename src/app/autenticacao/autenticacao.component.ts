/*
 * login.component.ts
 * Versão: <0.1>
 * No Copyright 
 *
 * Esta classe abtrai o login e a verificação e autenticação
   da conta logada no sistema
 */

import { Component, Input } from '@angular/core';
import { UsuarioComponent } from '../usuario/usuario.component';
import { FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Logger } from "../logger";

@Component({
    moduleId: module.id,
    selector: 'autenticacao',
    templateUrl: './autenticacao.component.html'
})
export class AutenticacaoComponent { 

    usuario: UsuarioComponent = new UsuarioComponent();
    @Input() senha: string;
    @Input() confirmaSenha: string;
    @Input() email: string;  

}