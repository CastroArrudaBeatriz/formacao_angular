import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/model/user';
import * as jwt_decode from 'jwt-decode';

@Injectable({ providedIn: 'root'})
export class UserService {

    userSubject: BehaviorSubject<User> = new BehaviorSubject<User>(null);

    constructor( private tokenService: TokenService ) {

        if (this.tokenService.existToken()) {
            this.decodeAndNotify();
        }
    }

    setToken(token: string): void {
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    getUser() {
        return this.userSubject.asObservable();
    }


    private decodeAndNotify() {
        const token = this.tokenService.getToken();
        const user = jwt_decode(token) as User;

        this.userSubject.next(user);

    }

    logout() {
        this.tokenService.removeToken();
        this.userSubject.next(null);
    }

    isLogged(): boolean {
        return this.tokenService.existToken();
    }
}
