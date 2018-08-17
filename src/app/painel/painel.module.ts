import { NgModule } from '@angular/core';
import { PainelComponent }  from './painel.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [ PainelComponent ],
    imports:      [ CommonModule ],
    exports: [ PainelComponent ]
})
export class PainelModule { } 