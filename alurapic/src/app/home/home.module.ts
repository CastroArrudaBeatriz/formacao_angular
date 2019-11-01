import { NgModule } from '@angular/core';
import { SigInComponent } from './signin/signin.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';

@NgModule({
    declarations: [
        SigInComponent,
        SignupComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        RouterModule,
        FormsModule
    ],
    exports: [
        SigInComponent,
        SignupComponent
    ]
})
export class HomeModule {

}
