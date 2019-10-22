import { NgModule } from '@angular/core';
import { SigInComponent } from './signin/signin.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        SigInComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        SigInComponent
    ]
})
export class HomeModule {

}
