import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';
import { TokenService } from 'src/app/core/token/token.service';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})
export class SigInComponent implements OnInit {

    loginForm: FormGroup;

    @ViewChild('userNameInput', {static: false})
    userNameInput: ElementRef<HTMLInputElement>;

    messages = [
        {
            key: 'username',
            text: 'User name is invalid'
        },
        {
            key: 'password',
            text: 'Password is invalid'
        }
    ];


    constructor(private formBuilder: FormBuilder,
                private authService: AuthService,

                private route: Router,

                private platformDetectorService: PlatformDetectorService,

                private tokenService: TokenService) {

    }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    login() {

        const username = this.loginForm.get('userName').value;
        const password = this.loginForm.get('password').value;

        this.authService.authenticate(username , password ).subscribe({
            next: () => {
                if (this.tokenService.existToken()) {
                    this.route.navigate(['user', username]);
                }
            },
            error: err => {
                console.error(err);
                alert('Invalid username or password!');
                this.loginForm.reset();

                if (this.platformDetectorService.isPlatformBrowser()) {
                    this.userNameInput.nativeElement.focus();
                }
            }
        });
    }

}
