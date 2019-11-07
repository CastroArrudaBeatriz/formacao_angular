import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { SignUpService } from './signup.service';

import { debounceTime, switchMap, map, first } from 'rxjs/operators';

@Injectable({ providedIn: 'root'})
export class UserNotTakenService {

    constructor( private signUpService: SignUpService) {
        this.checkUserNameTaken();
    }

    checkUserNameTaken() {

        return (control: AbstractControl) => {

            control.valueChanges.pipe(
                debounceTime(300)
            ).pipe(
                switchMap( userName => this.signUpService.checkUserNameTaken(userName))
            ).pipe(
                map(isTaken => isTaken ? {userNameTaken: true} : null)
            ).pipe(
                first()
            );

        };
    }
}
