import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { ListaComponent } from '../lista/lista.component';
import { ProdutoComponent } from '../produto/produto.component';
import { ListaService } from '../lista/lista.service';
import { UsuarioService } from '../usuario/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'painelListas',
    templateUrl: './painelListas.component.html',
    styleUrls: ['./painelListas.component.css']
})
export class PainelListasComponent  { 

    service: ListaService;
    service2: UsuarioService;
    mensagem: string = '';
    usuarioAutenticado: boolean;
    router: Router;
    @Input() nome: string;
    @Input() descricao: string;
    @Input() listaProdutos: ProdutoComponent[];
    elemento: ElementRef;

    constructor(elemento: ElementRef, service: ListaService, service2: UsuarioService, router: Router) {

        this.elemento = elemento;

        this.router = router;
        this.service = service;

        this.service2 = service2;
        this.usuarioAutenticado = this.service2.getAutenticado();
    }

    fadeOut(cb) {

        $(this.elemento.nativeElement).fadeOut(cb);
    }

    ngAfterViewInit(){
        $.getScript('app/modal/modal.min.js');
    }

    verificaRoute(lista: ListaComponent){
        if(!this.usuarioAutenticado){
            this.mensagem = "Faça o Login para enviar a mensagem";
        }else{
            this.service.setLista(lista);
            this.router.navigateByUrl("/cadastroMensagem");
        }
    }
}

