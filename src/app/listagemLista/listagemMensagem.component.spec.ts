import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemMensagemComponent } from './listagemMensagem.component';

describe('ListagemMensagemComponent', () => {
    let component: ListagemMensagemComponent;
    let fixture: ComponentFixture<ListagemMensagemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ListagemMensagemComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ListagemMensagemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
