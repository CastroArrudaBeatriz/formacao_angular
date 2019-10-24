import { NgModule } from '@angular/core';
import { SigInComponent } from './signin/signin.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        SigInComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        RouterModule
    ],
    exports: [
        SigInComponent
    ]
})
export class HomeModule {

}
