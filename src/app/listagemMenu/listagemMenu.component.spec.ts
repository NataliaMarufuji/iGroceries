import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemMenuComponent } from './listagemMenu.component';

describe('ListagemMenuComponent', () => {
    let component: ListagemMenuComponent;
    let fixture: ComponentFixture<ListagemMenuComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ListagemMenuComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ListagemMenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
