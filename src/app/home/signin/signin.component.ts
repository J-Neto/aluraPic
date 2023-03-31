import { Component, OnInit, Renderer2 } from '@angular/core';
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
    private router: Router,
    private renderer: Renderer2
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
        {
          next: () => {
            this.router.navigate(['user', userName]);
          },
          error: (err) => {
            console.log(err)
            this.loginForm.reset();
            alert('Invalid username or password');
            this.renderer.selectRootElement('#userNameInput').focus();
          }
        }
      )
  }
}
