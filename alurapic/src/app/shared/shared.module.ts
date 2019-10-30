import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from './components/card/card.module';
import { DarkenOnHoverModule } from './directives/darken-on-hover/darken-on-hover.module';
import { VmessageComponent } from './components/vmessage/vmessage.component';
import { VMessageModule } from './components/vmessage/vmessage.module';
import { HeaderComponent } from './components/header/header.component';
import { HeaderModule } from './components/header/header.module';

@NgModule({
    imports: [
        CommonModule,
        CardModule,
        DarkenOnHoverModule,
        VMessageModule,
        HeaderModule
    ],
    exports: [
        CardModule,
        DarkenOnHoverModule,
        VMessageModule,
        HeaderModule
    ],

})
export class SharedModule {

}
