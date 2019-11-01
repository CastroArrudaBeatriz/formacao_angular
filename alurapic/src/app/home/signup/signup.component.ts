import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  SignUpForm: FormGroup;
  constructor( private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.SignUpForm = this.formBuilder.group({
      email: ['', Validators.email, Validators.required],
      fullName: ['', Validators.required],
      userName: [],
      password: []
    });
  }

}
