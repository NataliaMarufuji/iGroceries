import { NgModule } from '@angular/core';
import { ServicesComponent } from './services.component';
import { ServicesService } from './services.service';

@NgModule({
    declarations: [ ServicesComponent],
    exports: [ ServicesComponent ],
    providers: [ ServicesService ]
})
export class ServicesModule { }