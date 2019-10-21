import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from './components/card/card.module';

@NgModule({
    imports: [
        CommonModule,
        CardModule
    ],
    exports: [
        CardModule
    ]
})
export class SharedModule {

}
