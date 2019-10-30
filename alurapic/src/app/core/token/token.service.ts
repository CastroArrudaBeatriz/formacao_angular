import { Injectable } from '@angular/core';

const _KEY = 'authToken';

@Injectable({providedIn: 'root'})
export class TokenService {

    constructor() {

    }

    existToken(): boolean {
       return  !!this.getToken();
    }

    setToken(value: string): void {
        window.localStorage.setItem(_KEY, value);
    }

    getToken(): string {
        return window.localStorage.getItem(_KEY);
    }

    removeToken(): void {
        window.localStorage.removeItem(_KEY);
    }
}
