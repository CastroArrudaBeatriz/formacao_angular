import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { Subject } from 'rxjs';
import { User } from 'src/app/model/user';
import * as jwt_decode from 'jwt-decode';

@Injectable({ providedIn: 'root'})
export class UserService {

    private userSubject: Subject<User> = new Subject<User>();

    constructor( private tokenService: TokenService ) {

        if (this.tokenService.existToken()) {
            this.decodeAndNotify();
        }
    }

    setToken(token: string): void {
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    getUser(token: string) {
    }


    private decodeAndNotify() {
        const token = this.tokenService.getToken();
        const user = jwt_decode(token) as User;

        this.userSubject.next(user);

    }
}