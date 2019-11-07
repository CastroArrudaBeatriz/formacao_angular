import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { UserNotTakenValidatorService } from './user-not-taken.validators.service';
import { NewUser } from 'src/app/model/new_user';
import { SignUpService } from './signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;
  constructor( private formBuilder: FormBuilder,
               private userNotTaken: UserNotTakenValidatorService,

               private signupServive: SignUpService,
               
               private router: Router) { }

  ngOnInit() {

    this.signUpForm = this.formBuilder.group({
      email: ['',
        [
          Validators.required,
          Validators.email
        ]
      ],

      fullName: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40)
        ]
      ],
      userName: ['',
      [Validators.required,
       lowerCaseValidator,
       Validators.minLength(2) ,
       Validators.maxLength(30)] ,
      this.userNotTaken.checkUserNameTaken()],

      password: ['',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(14)
        ]
      ]
    });
  }


  signUp() {
    const user: NewUser = this.signUpForm.getRawValue();
    this.signupServive.signup(user).subscribe({
      next: () => this.router.navigate(['']),
      error: err => console.error(err)
    });
  }
}
