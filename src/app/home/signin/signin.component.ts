import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface Login {
  userName: string;
  password: string;
}

@Component({
  templateUrl: './signin.component.html',
})
export class SignInComponent implements OnInit {
  
  loginForm!: FormGroup<any>;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
