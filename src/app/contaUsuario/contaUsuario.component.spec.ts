import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaUsuarioComponent } from './contaUsuario.component';

describe('ContaUsuarioComponent', () => {
    let component: ContaUsuarioComponent;
    let fixture: ComponentFixture<ContaUsuarioComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ContaUsuarioComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ContaUsuarioComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
