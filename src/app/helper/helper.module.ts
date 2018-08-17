import { NgModule } from '@angular/core';
import { HelperComponent }  from './helper.component';
import { HelperService }  from './helper.service';

@NgModule({
    providers: [ HelperService ]
})
export class HelperModule { } 