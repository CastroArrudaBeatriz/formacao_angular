import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from './components/card/card.module';
import { DarkenOnHoverModule } from './directives/darken-on-hover/darken-on-hover.module';

@NgModule({
    imports: [
        CommonModule,
        CardModule,
        DarkenOnHoverModule
    ],
    exports: [
        CardModule,
        DarkenOnHoverModule
    ]
})
export class SharedModule {

}
