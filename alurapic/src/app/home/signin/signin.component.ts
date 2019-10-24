import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';
import { Router } from '@angular/router';

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

                private route: Router) {

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
            next: () => this.route.navigate(['user', username]),
            error: err => {
                console.error(err);
                alert('Invalid username or password!');
                this.loginForm.reset();
                this.userNameInput.nativeElement.focus();
            }
        });
    }

}
