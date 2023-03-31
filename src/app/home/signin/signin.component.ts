import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';

export interface Login {
  userName: string;
  password: string;
}

@Component({
  templateUrl: './signin.component.html',
})
export class SignInComponent implements OnInit {
  
  loginForm!: FormGroup<any>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });

  }

  login() {
    
    const userName = this.loginForm.get('userName')?.value;
    const password = this.loginForm.get('password')?.value;

    this.authService
      .authenticate(userName, password)
      .subscribe(
        () => {
          this.router.navigate(['user', userName]);
        },
        err => {
          console.log(err);
          this.loginForm.reset();
          alert('Invalid username or password');
        }
      );
  }
}
